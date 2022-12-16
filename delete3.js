const uri = "mongodb+srv://torres:JhVfIiXumlgNhuWN@cluster0.o4mrikn.mongodb.net/?retryWrites=true&w=majority";

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, { useNewUrlParser: true });


async function run() {
  try {
    const db = client.db("enterprise_attack");
    // find the storage statistics for the "sample_mflix" database using the 'dbStats' command
    const result = await db.command({
      dbStats: 1,
    });
    //console.log(result);

    //const a = await db.collection('attack-pattern').find({});
    //console.log(a);
    

    async function print_db_info(client, resultsLimit) {
        const cursor = client
          .db('enterprise_attack')
          .collection('attack_pattern')
          .find()
          .limit(resultsLimit);
      
        const results = await cursor.toArray();
        if (results.length > 0) {
          console.log(`Found ${results.length} item(s):`);
          results.forEach((result, i) => {
      
            console.log();
            //console.log(`${i + 1}. name: ${result.name}`);
            //console.log(`   _id: ${result._id}`);
            //console.log(`   name: ${result.File}`);
            console.log(`   id: ${result.id}`);
            console.log(`   objects_revoked: ${result.objects_revoked}`);
            console.log(`   objects_name: ${result.objects_name}`);
            console.log(`   objects_description: ${result.objects_description}`);
            console.log(`   objects_x_mitre_detection: ${result.objects_x_mitre_detection}`);
            //console.log(`   bathrooms: ${result.bathrooms}`);
          });
        }
      }

      print_db_info(client, 20);

  } catch {
    console.log("");
  }
  
  
  /*finally {
    await client.close();
  }*/
}

run().catch(console.dir);