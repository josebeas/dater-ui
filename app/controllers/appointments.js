import Ember from 'ember';

export default Ember.Controller.extend({

  endpoint: 'appointments/',

  appointmentSubject: '',

  appointmentDate: '',

  isValidAppointment: false,

  appointmentDateChanged: Ember.observer('appointmentDate', function(){
    //this.set('isValidAppointment', !this.get('appointmentDate') === '');
    console.log('date observer is called');
  }),

  appointmentSubjectChanged: Ember.observer('appointmentSubject', function(){
    //this.set('isValidAppointment', !this.get('appointmentSubject') === '');
    console.log('subject observer is called');
  }),

  actions: {
    addAppointment(){
      alert(`Saving appointment in progress: ${this.get('appointmentSubject')}`);
      this.set('responseMessage', `Thank you! appointmen saved`);
      this.set('appointmentSubject', '');
      this.set('appointmentDate', '');
      this.set('isValidAppointment', false);
    }


  }

});
