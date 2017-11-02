import * as yup from "yup";
import { isObservable } from "mobx";

class MaybeObservableArraySchema extends yup.array {
  constructor() {
    super();

    this.withMutation(() => {
      this.transform((value, originalvalue) => {
        debugger;
        if (isObservable(originalvalue)) {
          return originalvalue.toJS();
        }
        return value;
      });
    });
  }
}

module.exports = {
  ...yup,
  array: MaybeObservableArraySchema
};
