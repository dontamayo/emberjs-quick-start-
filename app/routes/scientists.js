import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return ['marie curie', 'andrew e', 'mike sinatra', 'j-lo']
    }
});
