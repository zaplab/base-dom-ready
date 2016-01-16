
import ready from 'zap-base-dom-ready';

describe('zap-base-dom-ready', () => {
    beforeEach(() => {});

    afterEach(() => {});

    describe('should export the following', () => {
        it('ready', function() {
            expect(ready).toEqual(jasmine.any(Function));
        });
    });

    describe('ready', () => {
        it('ready should call the passed function when the dom is ready', (done) => {
            const innerFunctionSpy = jasmine.createSpy('innerFunctionSpy1');

            ready(() => {
                innerFunctionSpy();
            });

            setTimeout(() => {
                expect(innerFunctionSpy).toHaveBeenCalled();
                done();
            }, 1000);
        });

        it('next ready call should be called immediately', () => {
            const innerFunctionSpy = jasmine.createSpy('innerFunctionSpy2');

            ready(() => {
                innerFunctionSpy();
            });

            expect(innerFunctionSpy).toHaveBeenCalled();
        });
    });
});
