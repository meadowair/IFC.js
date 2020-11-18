import { createExtrusion } from "./three-extrusion.js";
import { namedProps as n } from "../../utils/global-constants.js";

function mapArbitraryProfileExtrusion(extruded) {
  const points = getArbitraryProfilePoints(extruded);
  return createExtrusion(points, extruded.depth);
}

function getArbitraryProfilePoints(extruded) {
  const profile = extruded.profile;
  const points = profile[n.outerCurve][n.points];
  return points.map((point) => {
    const coords = point[n.coordinates];
    return [-coords[0], -coords[1]];
  });
}

export { mapArbitraryProfileExtrusion };
