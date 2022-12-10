zip myapp.zip -r * .[^.]*




  describe('PUT Request: Update the User', () => {
    it('Updating a User', async () => {
      const res = await User.updateUser(`${username} ` + 'asd', `${password} ` + 'asdf', role, getauthToken);
      res.status.should.equal(statusCode.OK);
    });
  });

  describe('POST Request: Create a Product', () => {
    it('creating a User', async () => {
      const res = await User.createProduct(productName, cost, amountAvailable, currency, getauthToken);
      productID = res.body.data._id;
      console.log(`Printing productID:${productID}`);
      res.status.should.equal(statusCode.OK);
    });
  });

  describe('GET Request: Get Product', () => {
    it('Getting the Product', async () => {
      const res = await User.getProduct(productID, getauthToken);
      res.status.should.equal(statusCode.OK);
    });
  });

  describe('GET Request: Get Product', () => {
    it('Getting the Product', async () => {
      const res = await User.getProduct(productID, getauthToken);
      productDataTem = res.body.data;
      res.status.should.equal(statusCode.OK);
    });
  });

  describe('PUT Request: Update the Product', () => {
    it('Updating a Product', async () => {
      const res = await User.updateProduct(productName, cost, amountAvailable, currency, productID, getauthToken);
      res.status.should.equal(statusCode.OK);
    });
  });
  // transactData
  describe('POST Request: Login a Buyer', () => {
    it('logging in', async () => {
      const buyerUsername = 'buyer1';
      const buyerPassword = 'Hfdsjgjdsgdsjhkjjksdgk';
      const res = await User.loginUser(buyerUsername, buyerPassword);
      getBuyerAuthToken = res.body.data.token;
      res.status.should.equal(statusCode.OK);
    });
  });


  describe('POST Request: Credit The User', () => {
    it('crediting a User', async () => {
      const res = await User.creditUser(amount, getBuyerAuthToken);
      res.status.should.equal(statusCode.OK);
    });
  });

  describe('POST Request: Buy A product', () => {
    it('Buying a product', async () => {
      const res = await User.buyProduct(products, total_amount, getBuyerAuthToken);
      res.status.should.equal(statusCode.OK);
    });
  });


  describe('DELETE Request: Delete the Product', () => {
    it('Deleting a Product', async () => {
      const res = await User.deleteProduct(productID, getauthToken);
      res.status.should.equal(statusCode.OK);
    });
  });

  describe('DELETE Request: Delete the User', () => {
    it('Deleting a users', async () => {
      const res = await User.deleteUser(getauthToken);
      res.status.should.equal(statusCode.OK);
    });
  });