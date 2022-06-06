/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type FakeDataGenerator = import('./node_modules/fakedatagenerator_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends WebDriver, FakeDataGenerator {}
  interface I extends ReturnType<steps_file>, WithTranslation<FakeDataGenerator> {}
  namespace Translation {
    interface Actions {}
  }
}
