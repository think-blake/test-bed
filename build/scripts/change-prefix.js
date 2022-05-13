const replace = require('replace-in-file');

/**
 * Replace in file
 * Usage: https://github.com/adamreisnz/replace-in-file#basic-usage
 */
(async () => {
  const [from, to] = process.argv.slice(2);
  const options = {
    files: [
      'src/**/*.stories.*',
      'src/**/*.scss',
    ],
    from: new RegExp(from, 'g'),
    to,
    countMatches: true
  };

  try {
    if (!from) {
      throw new Error('No source prefix provided');
    }

    if (!to) {
      throw new Error('No target prefix provided');
    }

    const results = await replace(options);
    const changed = results
    .reduce((acc, cur) => {
      if (!cur.hasChanged) {
        // Skip unchanged files
        return acc;
      }

      // Add file path to collection
      acc.files.push(cur.file);

      // Update replacement count
      acc.count += cur.numReplacements;

      return acc;
    }, { files: [], count: 0 });

    // "changed" object includes files and count
    // eslint-disable-next-line no-console
    console.log(`✅ Replaced "${from}" prefix with "${to}" in ${changed.files.length} files`);
  }
  catch (err) {
    console.error('🛑 Error occurred ❯❯', err);
  }
})();

