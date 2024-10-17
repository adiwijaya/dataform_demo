function apply_pii(columns){
    return columns;
}

const TRAFFIC_SOURCE_MEDIUM = {
  test: `Traffic source medium`
};

const TRAFFIC_SOURCE_NAME = {
  traffic_source_name: `Name of traffic source`
};


const ga4_events = {
  ...TRAFFIC_SOURCE_MEDIUM,
  ...TRAFFIC_SOURCE_NAME,
};
module.exports = {
  ga4_events
}