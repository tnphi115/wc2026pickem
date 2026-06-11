const MATCHES = {
  M01: { espnId: '760415', h: 'MEX', a: 'RSA' },
  M02: { espnId: '760414', h: 'KOR', a: 'CZE' },
  M03: { espnId: '760413', h: 'CAN', a: 'BIH' },
  M04: { espnId: '760417', h: 'USA', a: 'PAR' },
  M05: { espnId: '760416', h: 'AUS', a: 'TUR' },
  M06: { espnId: '760412', h: 'QAT', a: 'SUI' },
  M07: { espnId: '760411', h: 'BRA', a: 'MAR' },
  M08: { espnId: '760410', h: 'HAI', a: 'SCO' },
  M09: { espnId: '760409', h: 'GER', a: 'CUR' },
  M10: { espnId: '760408', h: 'NED', a: 'JPN' },
  M11: { espnId: '760407', h: 'CIV', a: 'ECU' },
  M12: { espnId: '760406', h: 'SWE', a: 'TUN' },
  M13: { espnId: '760405', h: 'ESP', a: 'CPV' },
  M14: { espnId: '760404', h: 'BEL', a: 'EGY' },
  M15: { espnId: '760403', h: 'KSA', a: 'URU' },
  M16: { espnId: '760402', h: 'IRN', a: 'NZL' },
  M17: { espnId: '760401', h: 'FRA', a: 'SEN' },
  M18: { espnId: '760400', h: 'IRQ', a: 'NOR' },
  M19: { espnId: '760399', h: 'ARG', a: 'ALG' },
  M20: { espnId: '760398', h: 'AUT', a: 'JOR' },
  M21: { espnId: '760397', h: 'POR', a: 'COD' },
  M22: { espnId: '760396', h: 'ENG', a: 'CRO' },
  M23: { espnId: '760395', h: 'GHA', a: 'PAN' },
  M24: { espnId: '760394', h: 'UZB', a: 'COL' },
  M25: { espnId: '760393', h: 'CZE', a: 'RSA' },
  M26: { espnId: '760392', h: 'SUI', a: 'BIH' },
  M27: { espnId: '760391', h: 'CAN', a: 'QAT' },
  M28: { espnId: '760390', h: 'MEX', a: 'KOR' },
  M29: { espnId: '760389', h: 'TUR', a: 'PAR' },
  M30: { espnId: '760388', h: 'USA', a: 'AUS' },
  M31: { espnId: '760387', h: 'SCO', a: 'MAR' },
  M32: { espnId: '760386', h: 'BRA', a: 'HAI' },
  M33: { espnId: '760385', h: 'TUN', a: 'JPN' },
  M34: { espnId: '760384', h: 'NED', a: 'SWE' },
  M35: { espnId: '760383', h: 'GER', a: 'CIV' },
  M36: { espnId: '760382', h: 'ECU', a: 'CUR' },
  M37: { espnId: '760381', h: 'ESP', a: 'KSA' },
  M38: { espnId: '760380', h: 'BEL', a: 'IRN' },
  M39: { espnId: '760379', h: 'URU', a: 'CPV' },
  M40: { espnId: '760378', h: 'NZL', a: 'EGY' },
  M41: { espnId: '760377', h: 'ARG', a: 'AUT' },
  M42: { espnId: '760376', h: 'FRA', a: 'IRQ' },
  M43: { espnId: '760375', h: 'NOR', a: 'SEN' },
  M44: { espnId: '760374', h: 'JOR', a: 'ALG' },
  M45: { espnId: '760373', h: 'POR', a: 'UZB' },
  M46: { espnId: '760372', h: 'ENG', a: 'GHA' },
  M47: { espnId: '760371', h: 'PAN', a: 'CRO' },
  M48: { espnId: '760370', h: 'COL', a: 'COD' },
  M49: { espnId: '760369', h: 'SUI', a: 'CAN' },
  M50: { espnId: '760368', h: 'BIH', a: 'QAT' },
  M51: { espnId: '760367', h: 'SCO', a: 'BRA' },
  M52: { espnId: '760366', h: 'MAR', a: 'HAI' },
  M53: { espnId: '760365', h: 'CZE', a: 'MEX' },
  M54: { espnId: '760364', h: 'RSA', a: 'KOR' },
  M55: { espnId: '760363', h: 'CUR', a: 'CIV' },
  M56: { espnId: '760362', h: 'ECU', a: 'GER' },
  M57: { espnId: '760361', h: 'JPN', a: 'SWE' },
  M58: { espnId: '760360', h: 'TUN', a: 'NED' },
  M59: { espnId: '760359', h: 'TUR', a: 'USA' },
  M60: { espnId: '760358', h: 'PAR', a: 'AUS' },
  M61: { espnId: '760357', h: 'NOR', a: 'FRA' },
  M62: { espnId: '760356', h: 'SEN', a: 'IRQ' },
  M63: { espnId: '760355', h: 'CPV', a: 'KSA' },
  M64: { espnId: '760354', h: 'URU', a: 'ESP' },
  M65: { espnId: '760353', h: 'EGY', a: 'IRN' },
  M66: { espnId: '760352', h: 'NZL', a: 'BEL' },
  M67: { espnId: '760351', h: 'PAN', a: 'ENG' },
  M68: { espnId: '760350', h: 'CRO', a: 'GHA' },
  M69: { espnId: '760349', h: 'COL', a: 'POR' },
  M70: { espnId: '760348', h: 'COD', a: 'UZB' },
  M71: { espnId: '760347', h: 'ALG', a: 'AUT' },
  M72: { espnId: '760346', h: 'JOR', a: 'ARG' },
};

const JSONBIN_URL = 'https://api.jsonbin.io/v3/b/69cf10f4aaba882197bd33b3';
const JSONBIN_KEY = '$2a$10$5HVidNxSNjNWGXO8oHVhzOdXuhS7r4a7nqbj010pi3pNV/5Wfpy4q';
const ESPN_BASE = 'https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/summary?event=';

async function fetchJsonbin() {
  const r = await fetch(JSONBIN_URL, {
    headers: { 'X-Master-Key': JSONBIN_KEY, 'X-Bin-Versioning': 'false' }
  });
  if (!r.ok) throw new Error('JSONbin fetch failed');
  const j = await r.json();
  return j.record || j;
}

async function pushJsonbin(data) {
  const r = await fetch(JSONBIN_URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': JSONBIN_KEY,
      'X-Bin-Versioning': 'false'
    },
    body: JSON.stringify(data)
  });
  return r.ok;
}

function determineResult(homeScore, awayScore) {
  if (homeScore > awayScore) return 'home';
  if (awayScore > homeScore) return 'away';
  return 'draw';
}

exports.handler = async function (event, context) {
  try {
    const state = await fetchJsonbin();
    if (!state.results) state.results = {};
    if (!state.scores) state.scores = {};
    if (!state.scores.actual) state.scores.actual = {};

    let updated = false;
    const statusReport = [];

    for (const [matchId, matchInfo] of Object.entries(MATCHES)) {
      try {
        // Skip if result already manually set by admin AND score already exists
        if (state.results[matchId] && state.scores.actual[matchId]?.h != null) continue;

        const espnRes = await fetch(ESPN_BASE + matchInfo.espnId);
        if (!espnRes.ok) continue;
        const espnData = await espnRes.json();

        // Read status from header.competitions[0].status
        const comp = espnData?.header?.competitions?.[0];
        if (!comp) continue;

        const statusName = comp?.status?.type?.name;
        if (statusName !== 'STATUS_FULL_TIME' && statusName !== 'STATUS_FINAL') continue;

        // Read scores from header.competitions[0].competitors
        const competitors = comp?.competitors;
        if (!competitors || competitors.length < 2) continue;

        const homeComp = competitors.find(c => c.homeAway === 'home');
        const awayComp = competitors.find(c => c.homeAway === 'away');
        if (!homeComp || !awayComp) continue;

        const homeScore = parseInt(homeComp.score, 10);
        const awayScore = parseInt(awayComp.score, 10);
        if (isNaN(homeScore) || isNaN(awayScore)) continue;

        const result = determineResult(homeScore, awayScore);

        // Only write result if not already manually set
        if (!state.results[matchId]) {
