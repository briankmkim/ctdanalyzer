async function retrieveData() {
  const MongoClient = require('mongodb').MongoClient;
  const uri = 'mongodb+srv://torres:JhVfIiXumlgNhuWN@cluster0.o4mrikn.mongodb.net/?retryWrites=true&w=majority';
  const client = new MongoClient(uri, { useNewUrlParser: true });
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log("connected");

    const cursor = client
      .db('ics_attack')
      .collection('campaign')
      .find()

    const results = await cursor.toArray();
    if (results.length > 0) {
      console.log(`Found ${results.length} listing(s):`);
      results.forEach((result, i) => {

        console.log();
	      console.log(`${i + 1}:`);
        //if (result._id != null)
	        //console.log(`   _id: ${result._id}`);
        if (result.File != null)
          console.log(`   Name: ${result.File}`);
        if (result.type != null)
	        console.log(`   type: ${result.type}`);
        if (result.id != null)
	        console.log(`   id: ${result.id}`);
        if (result.spec_version != null)
	        console.log(`   spec_version: ${result.spec_version}`);
        if (result.objects_id != null)
	        console.log(`   objects_id: ${result.objects_id}`);
        if (result.objects_type != null)
	        console.log(`   objects_type: ${result.objects_type}`);
        if (result.objects_created != null)
	        console.log(`   objects_created: ${result.objects_created}`);
        if (result.objects_created_by_ref != null)
	        console.log(`   objects_created_by_ref: ${result.objects_created_by_ref}`);
        if (result.objects_modified != null)
	        console.log(`   objects_modified: ${result.objects_modified}`);
        if (result.objects_name != null)
	        console.log(`   objects_name: ${result.objects_name}`);
        if (result.objects_description != null)
	        console.log(`   objects_description: ${result.objects_description}`);
        if (result.objects_x_mitre_version != null)
	        console.log(`   objects_x_mitre_version: ${result.objects_x_mitre_version}`);
          if (result.objects_x_mitre_modified_by_ref != null)
	        console.log(`   objects_x_mitre_modified_by_ref: ${result.objects_x_mitre_modified_by_ref}`);
        if (result.objects_x_mitre_is_subtechnique != null)
	        console.log(`   objects_x_mitre_is_subtechnique: ${result.objects_x_mitre_is_subtechnique}`);
        if (result.objects_x_mitre_detection != null)
	        console.log(`   objects_x_mitre_detection: ${result.objects_x_mitre_detection}`);
        if (result.objects_revoked != null)
	        console.log(`   objects_revoked: ${result.objects_revoked}`);
        if (result.objects_x_mitre_deprecated != null)
	        console.log(`   objects_x_mitre_deprecated: ${result.objects_x_mitre_deprecated}`);
        if (result.objects_x_mitre_attack_spec_version != null)
	        console.log(`   objects_x_mitre_attack_spec_version: ${result.objects_x_mitre_attack_spec_version}`);
        if (result.objects_x_mitre_remote_support != null)
	        console.log(`   objects_x_mitre_remote_support: ${result.objects_x_mitre_remote_support}`);  
        if (result.objects_external_references_source_name != null)
	        console.log(`   objects_external_references_source_name: ${result.objects_external_references_source_name}`);
        if (result.objects_external_references_url != null)
	        console.log(`   objects_external_references_url: ${result.objects_external_references_url}`);
        if (result.objects_external_references_description != null)
	        console.log(`   objects_external_references_description: ${result.objects_external_references_description}`);
        if (result.objects_external_references_external_id != null)
	        console.log(`   objects_external_references_external_id: ${result.objects_external_references_external_id}`);
        if (result.objects_x_mitre_data_sources_x_mitre_data_sources != null)
	        console.log(`   objects_x_mitre_data_sources_x_mitre_data_sources: ${result.objects_x_mitre_data_sources_x_mitre_data_sources}`);
        if (result.objects_x_mitre_platforms_x_mitre_platforms != null)
	        console.log(`   objects_x_mitre_platforms_x_mitre_platforms: ${result.objects_x_mitre_platforms_x_mitre_platforms}`);
        if (result.objects_kill_chain_phases_kill_chain_name != null)
	        console.log(`   objects_kill_chain_phases_kill_chain_name: ${result.objects_kill_chain_phases_kill_chain_name}`);
        if (result.objects_kill_chain_phases_phase_name != null)
	        console.log(`   objects_kill_chain_phases_phase_name: ${result.objects_kill_chain_phases_phase_name}`);
        if (result.objects_x_mitre_contributors_x_mitre_contributors != null)
	        console.log(`   objects_x_mitre_contributors_x_mitre_contributors: ${result.objects_x_mitre_contributors_x_mitre_contributors}`);
        if (result.objects_x_mitre_domains_x_mitre_domains != null)
	        console.log(`   objects_x_mitre_domains_x_mitre_domains: ${result.objects_x_mitre_domains_x_mitre_domains}`);
        if (result.objects_object_marking_refs_object_marking_refs != null)
	        console.log(`   objects_object_marking_refs_object_marking_refs: ${result.objects_object_marking_refs_object_marking_refs}`);
        if (result.objects_x_mitre_permissions_required_x_mitre_permissions_required != null)
	        console.log(`   objects_x_mitre_permissions_required_x_mitre_permissions_required: ${result.objects_x_mitre_permissions_required_x_mitre_permissions_required}`);
        if (result.objects_x_mitre_defense_bypassed_x_mitre_defense_bypassed != null)
          console.log(`   objects_x_mitre_defense_bypassed_x_mitre_defense_bypassed: ${result.objects_x_mitre_defense_bypassed_x_mitre_defense_bypassed}`);
        if (result.objects_x_mitre_system_requirements_x_mitre_system_requirements != null)
          console.log(`   objects_x_mitre_system_requirements_x_mitre_system_requirements: ${result.objects_x_mitre_system_requirements_x_mitre_system_requirements}`);
        if (result.objects_x_mitre_effective_permissions_x_mitre_effective_permissions != null)
          console.log(`   objects_x_mitre_effective_permissions_x_mitre_effective_permissions: ${result.objects_x_mitre_effective_permissions_x_mitre_effective_permissions}`);
        if (result.objects_x_mitre_defense_bypassed_x_mitre_defense_bypassed != null)
          console.log(`   objects_x_mitre_impact_type_x_mitre_impact_type: ${result.objects_x_mitre_impact_type_x_mitre_impact_type}`);
      });
    }

    if ((await cursor.count()) === 0) {
      console.log("No documents found!");
    }

    //await cursor.forEach(console.dir);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
retrieveData().catch(console.dir);