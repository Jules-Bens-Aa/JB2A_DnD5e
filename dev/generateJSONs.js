// node generateJSONs.js

import fs from 'fs';
import { jb2aFreeDatabase } from "../scripts/jb2a_sequencer.js";
import { flattenObject } from './helpers.js'

jb2aFreeDatabase("modules").then((data) => {
    const metadata = ["_template", "_markers", "_timeRange", "_timestamps", "_flipbook", "file"]
    const sequencerDBPaths = Object.keys(flattenObject(data)).map(x => metadata.some(m => x.includes(m)) ? undefined : `jb2a.${x}`).filter(Boolean)

    fs.writeFile('./dev/dist/animations.json', JSON.stringify(data, null, "\t"), (err) => err && console.error(err));
    fs.writeFile('./dev/dist/animations_flat.json', JSON.stringify(sequencerDBPaths, null, "\t"), (err) => err && console.error(err));
})

