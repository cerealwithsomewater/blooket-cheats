/**
 * @license AGPL-3.0
 * Blooket Cheats
 * Copyright (C) 2023-present 05Konz
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 * Source: https://github.com/0n3/Blooket-Cheats 
*/

/* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

(() => {
    let iframe = document.querySelector("iframe");
    if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.style.display = "none";
        document.body.append(iframe);
    }
    /* By CryptoDude3 */
    if (window.fetch.call.toString() == 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function () {
            if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
        }
    }
    const timeProcessed = 1730769913304;
    let latestProcess = -1;
    const cheat = (async () => {
        let i = document.createElement('iframe');
        document.body.append(i);
        window.alert = i.contentWindow.alert.bind(window);
        i.remove();
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        if (stateNode.state.stage == "heist") {
            const imgs = Array.prototype.map.call(Array.prototype.slice.call(document.querySelector("[class*=prizesList]").children, 1, 4), (x) => x.querySelector("img").src);
            const esp = Object.values(document.querySelector("[class*=modal]"))[0].return.memoizedState.memoizedState;
            for (const e of document.querySelectorAll("[class*=boxContent] > div")) e.remove();
            const open = Object.values(document.querySelector("[class*=modal]"))[0].return.memoizedState.next.next.memoizedState;
            Array.prototype.forEach.call(document.querySelector("[class*=chestsWrapper]").children, (container, i) => {
                const box = container.firstChild.firstChild;
                if (open.includes(i)) return box.style.opacity = "";
                box.style.opacity = "0.5";
                let d = document.createElement("div");
                d.innerHTML = "<img src='" + imgs[2 - esp[i]] + "' style='max-width: 75%; max-height: 75%'></img>";
                d.className = "chestESP";
                d.style.position = "absolute";
                d.style.inset = "0";
                d.style.display = "grid";
                d.style.placeItems = "center";
                d.style.pointerEvents = "none"
                container.onclick = () => {
                    d.remove();
                    box.style.opacity = "";
                };
                container.firstChild.prepend(d);
            });
        } else alert("You must be in a heist!");
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/0n3/Blooket-Cheats/main/autoupdate/timestamps/voyage/heistESP.png?" + Date.now();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, this.width, this.height);
        let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "", last;
        let i = 0;
        while (i < data.length) {
            let char = String.fromCharCode(data[i % 4 == 3 ? (i++, i++) : i++] + data[i % 4 == 3 ? (i++, i++) : i++] * 256);
            decode += char;
            if (char == "/" && last == "*") break;
            last = char;
        }
        let _, time = timeProcessed, error = "There was an error checking for script updates. Run cheat anyway?";
        try {
            [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "((.|\n)+?)"/);
        } catch (e) {}
        if ((latestProcess = parseInt(time)) <= timeProcessed || iframe.contentWindow.confirm(error)) cheat();
    }
    img.onerror = img.onabort = () => {
        img.onerror = img.onabort = null;
        cheat();
        let iframe = document.querySelector("iframe");
        iframe.contentWindow.alert("It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6\n(The cheat will still run after this alert)")
    }
})();
