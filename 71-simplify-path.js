/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  if(!path || !path.length) return null;
  
  const CURRENT_DIRECTORY = '.';
  const PARENT_DIRECTORY = '..';
  
  const canonicalPath = [];
  path.split('/')
    .forEach((dir) => {
      if(!dir) {}
      else if(dir === CURRENT_DIRECTORY) {}
      else if(dir === PARENT_DIRECTORY) canonicalPath.pop();
      else canonicalPath.push(dir);
    })
  return '/' + canonicalPath.join('/');
};
