describe('service <%= nameCamel %>Service', () => {
	beforeEach(angular.mock.module('test'));

	it('should be registered', inject(<%= nameCamel %>Service => {
		expect(<%= nameCamel %>Service).not.toEqual(null);
	}));

	describe('foo variable', () => {
		it('should exist', inject(<%= nameCamel %>Service => {
			expect(<%= nameCamel %>Service.foo).not.toEqual(null);
		}));

		it('should default to "bar"', inject(<%= nameCamel %>Service => {
			expect(<%= nameCamel %>Service.foo).toEqual('bar');
		}));
	});

	describe('getters and setters', () => {
		it('should get the default value', inject((<%= nameCamel %>Service) => {
			expect(<%= nameCamel %>Service.getFoo()).toEqual('bar');
		}));

		it('should be able to set the value of foo', inject((<%= nameCamel %>Service) => {
			expect(<%= nameCamel %>Service.setFoo('fiz')).toEqual('fiz');
			expect(<%= nameCamel %>Service.getFoo()).toEqual('fiz');
		}));
	});
});
