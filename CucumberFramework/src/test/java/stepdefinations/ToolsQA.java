package stepdefinations;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import utility.Hook;

public class ToolsQA {
    private WebDriver driver;

    public ToolsQA() {
        this.driver = Hook.getDriver();
    }

    @Given("user open page toolsqa")
    public void openPage(){
        driver.get("https://demoqa.com/upload-download");
    }

    @When("user upload file")
    public void uploadfile() {
        driver.findElement(By.id("downloadButton")).click();
    }

    @And("user download file")
    public void downloadFile(){

    }
}
