export class ES7FunctionBind {
  method() {
    function foo(){
      console.log(this.x);
    }

    const obj = {x: 10};
    obj::foo();
  }
}
