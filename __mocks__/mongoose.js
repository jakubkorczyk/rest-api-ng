class ModelMock {
  constructor(mongoose) {
    this.mongoose = mongoose;
  }

  async create() {
    if(this.mongoose.databaseError) {
      throw Error("Database Error")
    }
    return this.props;
  }

  static async exec() {
    return result;
  }

  async findByIdAndUpdate() {}
}

class CommentMock extends ModelMock {
  async find() {
    return [{ user: "user", message: "message" }];
  }
}

class MovieMock extends ModelMock {}

class SchemaStub {
  index() {}
  pre() {}
}

class DocumentStub {}

const moongooseMock = {
  connect() {},
  databaseError: false,
  model(name) {
    const mocks = {
      Comment: CommentMock,
      Movie: MovieMock
    };
    return new mocks[name](this);
  },

  Schema: SchemaStub,
  Document: DocumentStub,
  HookNextFunction: () => {},
  __simulateDatabaseError() {
    this.databaseError = true;
  },
  __initMock() {
    this.databaseError = false;
  }
};

module.exports = moongooseMock;
