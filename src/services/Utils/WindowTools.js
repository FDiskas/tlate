// @flow

export class WindowTools {
  static setBodyImage(image: ?string) {
    window.document.body.style.backgroundImage = image !== undefined && image !== null ? `url("${image}")` : null;
  }
}
