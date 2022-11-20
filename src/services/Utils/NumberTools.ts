export class NumberTools {
  static abbreviateNumber(number: number) {
    // prettier-ignore
    return [
            { power: 3, postfix: 'K' },
            { power: 6, postfix: 'M' },
            { power: 9, postfix: 'B' },
        ].reduce((_result, next) => {
            let returnResult;
            if (number >= (10 ** next.power)) {
                returnResult = number / (10 ** next.power);
                return (`${returnResult % Math.floor(returnResult) < 0.05 ||
                    returnResult % Math.floor(returnResult) >= 0.9
                    ? returnResult.toFixed(0)
                    : returnResult.toFixed(1)} ${next.postfix}`);
            }
            return returnResult;
        }, number);
  }
}
