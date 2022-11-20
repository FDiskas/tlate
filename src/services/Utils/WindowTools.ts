export class WindowTools {
  static setBodyImage(image?: string) {
    document.body.style.backgroundImage = image !== undefined && image !== null ? `url("${image}")` : null;
  }
}
