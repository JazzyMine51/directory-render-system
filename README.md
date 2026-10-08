# Render ASCII art animations

## How to use

- Add the render.js file to your HTML file
- Add a p tag with the `animate` class
- Put the animation name in the innerHTML of the p tag
- Apply the `white-space: pre-wrap;` CSS to the p tag to make sure each line wraps
- Apply a mono space font to the p tag
- Add an art.js file with the format bellow:
- Make sure each line of text in the frame ends with `\n`

```js
export const data = [
    {
        name: "animation_name",
        // optional value for if the animation is in two steps
        // if the animation loops in full, remove this var
        // if the animation is in steps (character walks in, then loops other animation), add the index of the final frame of the first step
        "step_end_index": 3, 
        "frames": [
            'frame 1',
            'frame 2',
            'frame 3',
            'frame 4',
            'frame 5',
            'frame 5|'
        ]
    }
];
```

## Example

HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ASCII Art Animation system</title>
    <link rel="stylesheet" href="./main.css">

    <!-- google mono space font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- animation paragraphs, animation name is in the innerHTML -->
    <p>Animation in two steps (123, then loop abc)</p>
    <p class="animate">123acb</p>

    <p>Animation is not in steps (123abc forever)</p>
    <p class="animate">123acb2</p>

    <script type="module" src="./js/render.js"></script>
</body>
</html>
```

CSS:
```css
html {
    background-color: #FAF6CE;
    color: #191624;
    font-family: "Roboto Mono", monospace;
    font-weight: bolder;
}

.animate {
    white-space: pre-wrap;
}
```

JS (animation data):
```js
export const data = [
    {
        name: "123acb",
        "step_end_index": 3,
        "frames": [
            ' _ \n/ |\n| |\n| |\n|_|',
            ' ____  \n|___ \\ \n  __) |\n / __/ \n|_____|',
            ' _____ \n|___ / \n  |_ \\ \n ___) |\n|____/ ',
            '    _    \n   / \\   \n  / _ \\  \n / ___ \\ \n/_/   \\_\\',
            ' ____ \n| __ )\n|  _ \\\n| |_) |\n|____/ ',
            '  ____ \n / ___|\n| |    \n| |___ \n \\____|'
        ]
    },
    {
        name: "123acb2",
        "frames": [
            ' _ \n/ |\n| |\n| |\n|_|',
            ' ____  \n|___ \\ \n  __) |\n / __/ \n|_____|',
            ' _____ \n|___ / \n  |_ \\ \n ___) |\n|____/ ',
            '    _    \n   / \\   \n  / _ \\  \n / ___ \\ \n/_/   \\_\\',
            ' ____ \n| __ )\n|  _ \\\n| |_) |\n|____/ ',
            '  ____ \n / ___|\n| |    \n| |___ \n \\____|'
        ]
    }

];
```

## Requirements


done: 
- render each frame for x time
- fetch each frame from json array
- support multiple animations per site
    - say animation name in class name

need doing: 
- A11y
    - make sure the frames do not get read out to the viewer
    - make sure theres a aria label or equivalent 
- make sure the text box fits the art at all screen sizes

