// import Base from 'ember-simple-auth/authenticators/base';

// export default Base.extend({
//   restore(data) {
//   },

//   authenticate(/*args*/) {
//   },

//   invalidate(data) {
//   }
// });
import Devise from 'ember-simple-auth/authenticators/devise';

export default Devise.extend({
  serverTokenEndpoint: 'http://localhost:3000/signin'
});
