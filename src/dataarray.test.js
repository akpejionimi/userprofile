const data = require('./data')
  
  
  test('the data list has name and url in it', () => {
    expect(data).toContain('name','url');
  });