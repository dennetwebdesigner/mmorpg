import { Game } from "../../Core/canvasSettings.js";
import UIObjectsList from "../../UI/UIObjectsList.js";
import { loginPlayer } from "../../UI/Methods/LoginPlayer.js";

export class LoginScene {
    constructor(connection) {
        this.name = "login";
        this.connection = connection;

        this.background = new Image();
        this.background.src = "./engine/assets/img/login/UI_Login_fundo.png";

        this.logo = new Image();
        this.logo.src = "./engine/assets/img/login/UI_Login_logo.png";

        this.btnStart = new Image();
        this.btnStart.src = "./engine/assets/img/login/UI_Login_bt_iniciar.png";

        this.inputs = new Image();
        this.inputs.src = "./engine/assets/img/login/UI_Login_inputs.png";

        this.inputUsername = document.createElement("input");
        this.inputUsername.classList.add("inputsLog");
        this.inputUsername.setAttribute("id", "usernameInput");

        this.inputPassword = document.createElement("input");
        this.inputPassword.type = "password";
        this.inputUsername.setAttribute("id", "passwordInput");
        this.inputPassword.classList.add("inputsLog");

        UIObjectsList.Inputs.NamePlayer = this.inputUsername;
        UIObjectsList.Inputs.passwordPlayer = this.inputPassword;

        document.body.append(this.inputUsername, this.inputPassword);
    }

    getStyle(element, att, callback) {
        const getAtt = +window.getComputedStyle(element)[att].replace("px", "");
        return callback(getAtt);
    }

    adjustInputsLog() {
        this.inputUsername.style.top = this.getStyle(Game.canvas, "top", (data) => {
            const top =
                document.body.clientHeight / 2 -
                this.inputUsername.clientHeight / 2 -
                53;
            return top + "px";
        });

        this.inputPassword.style.top = this.getStyle(Game.canvas, "top", (data) => {
            const top =
                document.body.clientHeight / 2 -
                this.inputUsername.clientHeight / 2 +
                94;

            return top + "px";
        });

        this.inputUsername.style.left = this.getStyle(
            Game.canvas,
            "left",
            (data) => {
                let left =
                    document.body.clientWidth / 2 -
                    this.inputUsername.clientWidth / 2 -
                    1.9;
                return left + "px";
            }
        );

        this.inputPassword.style.left = this.getStyle(
            Game.canvas,
            "left",
            (data) => {
                let left =
                    document.body.clientWidth / 2 -
                    this.inputUsername.clientWidth / 2 -
                    1.9;
                return left + "px";
            }
        );
    }

    update() {
        this.adjustInputsLog();
        this.showElements({
            img: this.background,
            display: {
                width: Game.display.size.width / Game.camera.scale,
                height: Game.display.size.height / Game.camera.scale,
            },
        });
        this.showElements({
            img: this.logo,
            display: {
                width: Game.display.size.width / Game.camera.scale,
                height: Game.display.size.height / Game.camera.scale,
            },
        });
        this.showElements({
            img: this.inputs,
            display: {
                width: Game.display.size.width / Game.camera.scale,
                height: Game.display.size.height / Game.camera.scale,
            },
        });
        this.showElements({
            img: this.btnStart,
            display: {
                width: Game.display.size.width / Game.camera.scale,
                height: Game.display.size.height / Game.camera.scale,
            },
        });
    }

    showElements(element) {
        if (!element.position) {
            element.position = {
                x: 0,
                y: 0,
            };
        }

        if (!element.cut) {
            element.cut = {
                x: 0,
                y: 0,
            };
        }

        if (!element.size) {
            element.size = {
                width: Game.display.size.width,
                height: Game.display.size.height,
            };
        }

        if (!element.display) {
            element.display = {
                width: Game.display.size.width,
                height: Game.display.size.height,
            };
        }

        Game.brushTool.drawImage(
            element.img,
            element.cut.x,
            element.cut.y,
            element.size.width,
            element.size.height,
            element.position.x,
            element.position.y,
            element.display.width,
            element.display.height
        );
    }

    click() {
        const mouse = Game.mouse;
        if (
            mouse.x >= 420 &&
            mouse.x <= 757 &&
            mouse.y >= 547 &&
            mouse.y <= 659
        ) {
            loginPlayer(this.connection, "register_new_player");
        }
    }

    mouseOver() {
        const mouse = Game.mouse;
        if (
            mouse.x >= 420 &&
            mouse.x <= 757 &&
            mouse.y >= 547 &&
            mouse.y <= 659
        ) {
            Game.canvas.style.cursor = "pointer";
        } else {
            Game.canvas.style.cursor = "default";
        }
    }
}