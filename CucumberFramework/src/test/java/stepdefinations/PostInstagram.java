package stepdefinations;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utility.Hook;
public class PostInstagram {
    private WebDriver driver;

    public PostInstagram() {
        {
            this.driver = Hook.getDriver();
        }
    }

    @Given("^user in login page instagram$")
    public void user_in_login_page_instagram() {
        driver.get("https://www.instagram.com/");
        System.out.println("Instagram is opened successfully");
        Assert.assertTrue(driver.findElement(By.xpath("//i[@aria-label='Instagram']")).isDisplayed());
    }

    @When("^user input username \"([^\"]*)\"$")
    public void user_input_username(String arg1) {
        driver.findElement(By.xpath("//input[@name='username']")).sendKeys(arg1);
    }

    @And("^user input password \"([^\"]*)\"$")
    public void user_input_password(String arg1) {
        driver.findElement(By.xpath("//input[@name='password']")).sendKeys(arg1);
    }

    @And("^user loggedin to instagram$")
    public void user_loggedin_to_instagram() {
        driver.findElement(By.xpath("//button[@class='_acan _acap _acas _aj1-']")).click();
    }

    @When("^user click add post$")
    public void user_click_add_post() {
        String xpathPost = "(//*[name()='svg'][@aria-label='New post'])[1]";
        driver.findElement(By.xpath(xpathPost)).click();
    }

    @And("^user choose photo from directory$")
    public void user_choose_photo_from_directory() {
        WebElement upload_file = driver.findElement(By.xpath("//input[@class]"));
        upload_file.sendKeys(System.getProperty("user.dir") + "//File//postpenelope.jpg");
    }

    @And("^user edit photo in instagram$")
    public void user_edit_photo_in_instagram() {
        driver.findElement(By.xpath("//div[contains(text(),'Next')]")).click();
        driver.findElement(By.xpath("//div[contains(text(),'Next')]")).click();
    }

    @And("^user type caption \"([^\"]*)\"$")
    public void user_type_caption(String arg1) {
        driver.findElement(By.xpath("//p[@class]")).sendKeys(arg1);
    }

    @Then("^user click button share$")
    public void user_click_button_share() {
        driver.findElement(By.xpath("//div[contains(text(),'Share')]")).click();
    }
}