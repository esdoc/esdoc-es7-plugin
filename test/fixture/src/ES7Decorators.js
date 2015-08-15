/**
 * this is ES7Decorators with decorators
 */
@decorator1
@decorator2
export class ES7Decorators {
  /**
   * this is method with decorators
   */
  @decorator1
  @decorator2
  method(){}
}

function decorator1(target){}
function decorator2(target){}
