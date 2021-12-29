import './index.css'

import {Runtime} from "https://unpkg.com/@observablehq/runtime@4/dist/runtime.js";
      import notebook from "https://api.observablehq.com/@jashkenas/breakout.js?v=3";
      console.log('hi')
      
      const renders = {
        "viewof c": "#game",
        "score": "#score",
        "highscore": "#highscore",
        "viewof newgame": "#newgame"
      };
      function render(_node, value) {
        if (!(value instanceof Element)) {
          const el = document.createElement("span");
          el.innerHTML = value;
          value = el;
        }
        if (_node.firstChild !== value) {
          if (_node.firstChild) {
            while (_node.lastChild !== _node.firstChild) _node.removeChild(_node.lastChild);
            _node.replaceChild(value, _node.firstChild);
          } else {
            _node.appendChild(value);
          }
        }
      }
      const runtime = new Runtime();
      const main = runtime.module(notebook, name => {
        const selector = renders[name];
        if (selector) {
          return {fulfilled: (value) => render(document.querySelector(selector), value)}
        } else {
          return true;
        }
      });