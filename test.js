const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://niviatestdev:mhQULJxlJZ7pZWOw@cluster0.slbrf.mongodb.net/<database>?retryWrites=true&w=majority';

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log('Conexão bem-sucedida!');
  } catch (error) {
    console.error('Erro de conexão:', error);
  } finally {
    await client.close();
  }
}

run();
