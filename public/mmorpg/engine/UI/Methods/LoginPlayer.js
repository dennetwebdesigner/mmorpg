import { api } from '../../../utils/Api.js';
import { sendServer } from '../../../utils/connection.js';
import { Game } from '../../Core/canvasSettings.js';
import UI from '../UIObjectsList.js';

export const loginPlayer = (connection, request) => {
    const name = UI.Inputs.NamePlayer;
    const password = UI.Inputs.passwordPlayer;
    if (!name.value || !password.value) {
        Game.scene.all_scenes[Game.scene.current].loading = false;
        alert('por favor preencha os camposnome de usuario e senha!');
        return null;
    }
    api.send(
        'post',
        `${window.location.protocol}//${window.location.host}/api/auth`,
        (res, event) => {
            if (res.error) {
                Game.scene.all_scenes[Game.scene.current].loading = false;
                alert(res.error);
                return;
            }
            Game.scene.all_scenes[Game.scene.current].loading = false;
            sendServer(connection, request, { name: name.value });
        },
        JSON.stringify({ username: name.value, password: password.value })
    );
};

export const removeLoginElements = () => {
    Game.scene.current = 'phase001';
    UI.Inputs.NamePlayer.remove();
    UI.Inputs.passwordPlayer.remove();
};