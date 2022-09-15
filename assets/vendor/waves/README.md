Waves using gsap, jquery, and svg

## Required
- jQuery
- GSAP (TweenMax)

## Usage

Create a svg path
```svg
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="intro">
    <path id="divSvg" d=""></path>
</svg>
````


Call svg path ID
```js
$('#divSvg').drawWaves({
    height: $waveHeight,
    waveDelta: $waveDelta,
    wavePoints: $wavePoints
    speed: .15,
});
```

### Credits

Waves based on [This codepen Board](https://codepen.io/grimor/pen/qbXLdN)
