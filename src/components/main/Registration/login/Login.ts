import { pageTask } from '../../../../types/pageTask'
import '../style/login.css'
export class LoginPage implements pageTask {
  public style: string = 'login.css'
  toHTML(): HTMLElement {
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="login container">
    <div class="wrapper fadeInDown">
  <div id="formContent">
    <!-- Tabs Titles -->

    <!-- Icon -->
    <div class="fadeIn first">
      <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
    </div>

    <!-- Login Form -->
    <form>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="login">
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="password">
      <input type="submit" class="fadeIn fourth" value="Log In">
    </form>

    <!-- Remind Passowrd -->
    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>
      </div>
    `
    return div
  }
}
