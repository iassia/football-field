const exec = require('@actions/exec');
const core = require('@actions/core');

const folderName = 'dist';
const staticBranch = 'gh-pages';

(async () => {
  try {
    await exec.exec('git', ['checkout', '--orphan', staticBranch]);
    await exec.exec('npm', ['run', 'build']);
    await exec.exec('git', ['--work-tree', folderName, 'add', '--all']);
    await exec.exec('git', ['--work-tree', folderName, 'commit', '-m', staticBranch]);
    await exec.exec('git', ['push', 'origin', `HEAD:${staticBranch}`, '--force']);
    await exec.exec('rm', ['-r', folderName]);
    await exec.exec('git', ['checkout', '-f', 'master']);
    await exec.exec('git', ['branch', '-D', staticBranch]);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
