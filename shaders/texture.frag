precision mediump float;

uniform sampler2D image;

varying vec4 color;
varying vec2 texture;

void main() {

    gl_FragColor = color * texture2D(image, vec2(texture.s, texture.t));
}
