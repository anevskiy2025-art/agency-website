import pytest
from playwright.sync_api import sync_playwright, expect

@pytest.fixture(scope="module")
def browser_context():
    with sync_playwright() as p:
        # Launch chromium in headless mode
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 800})
        yield context
        browser.close()

def test_home_page_elements(browser_context):
    page = browser_context.new_page()
    page.goto("http://localhost:5173")
    page.wait_for_load_state("networkidle")

    # Verify agency name branding in navbar
    expect(page.get_by_text("ÆTHER")).to_be_visible()

    # Verify hero heading is present
    expect(page.get_by_text("Создаем веб-сайты и цифровые системы")).to_be_visible()

    # Verify navigation anchors
    expect(page.get_by_role("button", name="Услуги")).to_be_visible()
    expect(page.get_by_role("button", name="Портфолио")).to_be_visible()
    expect(page.get_by_role("button", name="Контакты")).to_be_visible()

    page.close()

def test_contact_form_submission(browser_context):
    page = browser_context.new_page()
    page.goto("http://localhost:5173")
    page.wait_for_load_state("networkidle")

    # Fill out the web studio inquiry form
    page.get_by_label("Ваше имя").fill("Тестовый Клиент")
    page.get_by_label("Номер телефона").fill("+79998887766")
    page.get_by_label("Email").fill("client@test.ru")
    page.get_by_label("Расскажите о проекте").fill("Нам нужен интернет-магазин с интеграцией оплат.")

    # Intercept API post request to backend
    with page.expect_response("**/api/contact") as response_info:
        page.get_by_role("button", name="Отправить заявку").click()
    
    response = response_info.value
    assert response.status == 201
    
    # Check that success message is displayed on UI
    expect(page.get_by_text("Заявка успешно отправлена")).to_be_visible()

    page.close()

def test_messenger_links(browser_context):
    page = browser_context.new_page()
    page.goto("http://localhost:5173")
    page.wait_for_load_state("networkidle")

    # Verify Nevsky Alexander Vladimirovich contact profile is visible
    expect(page.get_by_text("Невский Александр Владимирович")).to_be_visible()
    expect(page.get_by_text("+375 (25) 642-91-46")).to_be_visible()

    # Verify Telegram, WhatsApp, and Viber link destinations
    tg_link = page.get_by_role("link", name="Telegram")
    expect(tg_link).to_have_attribute("href", "https://t.me/+375256429146")

    wa_link = page.get_by_role("link", name="WhatsApp")
    expect(wa_link).to_have_attribute("href", "https://wa.me/375256429146")

    viber_link = page.get_by_role("link", name="Viber")
    expect(viber_link).to_have_attribute("href", "viber://chat?number=%2B375256429146")

    page.close()
