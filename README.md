# Vue JS - Notes

A vue file consist of three parts:-
- Template
- Script
- Style

##### Template
This will contain all the html stuff which is meant to rendered by the file. Any dynamic JS can be injected with the help of curly brackets {}.

##### Script
Place where one can write js.

##### Style
Here we can write normal css in this tag. If we specify *scoped* as an attribute to this tag, the css will be limited to this file only and will not leak out and affect other files.

*Tip:- Install a dev dependency called as **prettier-plugin-tailwindcss** for systematic arrangement of the utility classes!* 