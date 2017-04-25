/**
 * Created by javier on 4/24/17.
 */
export const lenghtMixin = {
    computed: {
        counted() {
            return this.countMe + ' (' + this.countMe + ')';
        }
    }
};