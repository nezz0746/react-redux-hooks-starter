import { all } from 'redux-saga/effects';

// export function* doSomething({ userId }) {
//   try {
//     console.log('Doing Something');
//   } catch (error) {

//   }
// }

export default function* rootSaga() {
  yield all([
    // takeLatest(DO_SOMETHING, doSomething)
  ]);
}
