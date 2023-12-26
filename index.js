const workspaceLength = 67;
const workspaceWidth = 54;
const tableWidth = 3;
const tableLength = 4;
const distanceBetweenTables = 0.5;
const distanceBetweenFans = 1;
const gapBetweenTableLines = 1;
const acArea = 10;
const maxTablesPerLine = Math.floor((workspaceWidth - (2 * distanceBetweenTables)) / (tableWidth + distanceBetweenTables));
const maxFansPerLine = Math.floor((workspaceLength - (2 * distanceBetweenFans)) / (tableLength + distanceBetweenFans));
const maxTables = maxTablesPerLine * (Math.floor(workspaceLength / (tableLength + gapBetweenTableLines)) - 1);
const maxFans = maxFansPerLine * (Math.floor(workspaceWidth / (tableWidth + gapBetweenTableLines)) - 1);
const maxACs = Math.floor(workspaceLength * workspaceWidth / acArea);
function calculateTablesAndFans(workspaceArea) {
  const workspaceLength = Math.sqrt(workspaceArea);
  const workspaceWidth = workspaceLength;
  const maxTables = calculateMaxTables(workspaceLength);
  const maxFans = calculateMaxFans(workspaceWidth);
  return {
    tables: maxTables,
    fans: maxFans,
  };
}
function calculateMaxTables(workspaceLength) {
  const numTableLines = Math.floor(workspaceLength / (tableLength + gapBetweenTableLines));
  const maxTablesPerLine = Math.floor((workspaceWidth - (2 * distanceBetweenTables)) / (tableWidth + distanceBetweenTables));
  const maxTables = maxTablesPerLine * (numTableLines - 1);
  return maxTables;
}
function calculateMaxFans(workspaceWidth) {
  const numFanLines = Math.floor(workspaceWidth / (tableWidth + gapBetweenTableLines));
  const maxFansPerLine = Math.floor((workspaceLength - (2 * distanceBetweenFans)) / (tableLength + distanceBetweenFans));
  const maxFans = maxFansPerLine * (numFanLines - 1);
  return maxFans;
}
let { tables, fans } = calculateTablesAndFans(workspaceLength * workspaceWidth);
tables = Math.round(tables);
fans = Math.round(fans);
console.log(`For a workspace area of ${workspaceLength * workspaceWidth} meters;`);
console.log(`The maximum number of tables is ${tables}.`);
console.log(`And the maximum number of fans is ${fans}.`);