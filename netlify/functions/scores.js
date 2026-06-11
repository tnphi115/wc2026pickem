const MATCHES = {
  M01: { espnId: '700947', h: 'MEX', a: 'RSA' },
  M02: { espnId: '700948', h: 'KOR', a: 'CZE' },
  M03: { espnId: '700949', h: 'CAN', a: 'BIH' },
  M04: { espnId: '700950', h: 'USA', a: 'PAR' },
  M05: { espnId: '700951', h: 'AUS', a: 'TUR' },
  M06: { espnId: '700952', h: 'QAT', a: 'SUI' },
  M07: { espnId: '700953', h: 'BRA', a: 'MAR' },
  M08: { espnId: '700954', h: 'HAI', a: 'SCO' },
  M09: { espnId: '700955', h: 'GER', a: 'CUR' },
  M10: { espnId: '700956', h: 'NED', a: 'JPN' },
  M11: { espnId: '700957', h: 'CIV', a: 'ECU' },
  M12: { espnId: '700958', h: 'SWE', a: 'TUN' },
  M13: { espnId: '700959', h: 'ESP', a: 'CPV' },
  M14: { espnId: '700960', h: 'BEL', a: 'EGY' },
  M15: { espnId: '700961', h: 'KSA', a: 'URU' },
  M16: { espnId: '700962', h: 'IRN', a: 'NZL' },
  M17: { espnId: '700963', h: 'FRA', a: 'SEN' },
  M18: { espnId: '700964', h: 'IRQ', a: 'NOR' },
  M19: { espnId: '700965', h: 'ARG', a: 'ALG' },
  M20: { espnId: '700966', h: 'AUT', a: 'JOR' },
  M21: { espnId: '700967', h: 'POR', a: 'COD' },
  M22: { espnId: '700968', h: 'ENG', a: 'CRO' },
  M23: { espnId: '700969', h: 'GHA', a: 'PAN' },
  M24: { espnId: '700970', h: 'UZB', a: 'COL' },
  M25: { espnId: '700971', h: 'CZE', a: 'RSA' },
  M26: { espnId: '700972', h: 'SUI', a: 'BIH' },
  M27: { espnId: '700973', h: 'CAN', a: 'QAT' },
  M28: { espnId: '700974', h: 'MEX', a: 'KOR' },
  M29: { espnId: '700975', h: 'TUR', a: 'PAR' },
  M30: { espnId: '700976', h: 'USA', a: 'AUS' },
  M31: { espnId: '700977', h: 'SCO', a: 'MAR' },
  M32: { espnId: '700978', h: 'BRA', a: 'HAI' },
  M33: { espnId: '700979', h: 'TUN', a: 'JPN' },
  M34: { espnId: '700980', h: 'NED', a: 'SWE' },
  M35: { espnId: '700981', h: 'GER', a: 'CIV' },
  M36: { espnId: '700982', h: 'ECU', a: 'CUR' },
  M37: { espnId: '700983', h: 'ESP', a: 'KSA' },
  M38: { espnId: '700984', h: 'BEL', a: 'IRN' },
  M39: { espnId: '700985', h: 'URU', a: 'CPV' },
  M40: { espnId: '700986', h: 'NZL', a: 'EGY' },
  M41: { espnId: '700987', h: 'ARG', a: 'AUT' },
  M42: { espnId: '700988', h: 'FRA', a: 'IRQ' },
  M43: { espnId: '700989', h: 'NOR', a: 'SEN' },
  M44: { espnId: '700990', h: 'JOR', a: 'ALG' },
  M45: { espnId: '700991', h: 'POR', a: 'UZB' },
  M46: { espnId: '700992', h: 'ENG', a: 'GHA' },
  M47: { espnId: '700993', h: 'PAN', a: 'CRO' },
  M48: { espnId: '700994', h: 'COL', a: 'COD' },
  M49: { espnId: '700995', h: 'SUI', a: 'CAN' },
  M50: { espnId: '700996', h: 'BIH', a: 'QAT' },
  M51: { espnId: '700997', h: 'SCO', a: 'BRA' },
  M52: { espnId: '700998', h: 'MAR', a: 'HAI' },
  M53: { espnId: '700999', h: 'CZE', a: 'MEX' },
  M54: { espnId: '701000', h: 'RSA', a: 'KOR' },
  M55: { espnId: '701001', h: 'CUR', a: 'CIV' },
  M56: { espnId: '701002', h: 'ECU', a: 'GER' },
  M57: { espnId: '701003', h: 'JPN', a: 'SWE' },
  M58: { espnId: '701004', h: 'TUN', a: 'NED' },
  M59: { espnId: '701005', h: 'TUR', a: 'USA' },
  M60: { espnId: '701006', h: 'PAR', a: 'AUS' },
  M61: { espnId: '701007', h: 'NOR', a: 'FRA' },
  M62: { espnId: '701008', h: 'SEN', a: 'IRQ' },
  M63: { espnId: '701009', h: 'CPV', a: 'KSA' },
  M64: { espnId: '701010', h: 'URU', a: 'ESP' },
  M65: { espnId: '701011', h: 'EGY', a: 'IRN' },
  M66: { espnId: '701012', h: 'NZL', a: 'BEL' },
  M67: { espnId: '701013', h: 'PAN', a: 'ENG' },
  M68: { espnId: '701014', h: 'CRO', a: 'GHA' },
  M69: { espnId: '701015', h: 'COL', a: 'POR' },
  M70: { espnId: '701016', h: 'COD', a: 'UZB' },
  M71: { espnId: '701017', h: 'ALG', a: 'AUT' },
  M72: { espnId: '701018', h: 'JOR', a: 'ARG' },
};

const JSONBIN_URL = 'https://api.jsonbin.io/v3/b/69cf10f4aaba882197bd33b3';
const JSONBIN_KEY = '$2a$10$5HVidNxSNjNWGXO8oHVhzOdXuhS7r4a7nqbj010pi3pNV/5Wfpy4q';

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
    // Fetch current state from JSONbin
    const state = await fetchJsonbin();
    if (!state.results) state.results = {};
    if (!state.scores) state.scores = {};
    if (!state.scores.actual) state.scores.actual = {};

    let updated = false;
    const statusReport = [];

    // Check each match against ESPN
    for (const [matchId, matchInfo] of Object.entries(MATCHES)) {
      try {
        const espnUrl = `https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.worldcup/summary?event=${matchInfo.espnId}`;
        const espnRes = await fetch(espnUrl);
        if (!espnRes.ok) continue;
        const espnData = await espnRes.json();

        const header = espnData?.header;
        if (!header) continue;

        const competition = header?.competitions?.[0];
        if (!competition) continue;

        const status = competition?.status?.type?.name;
        // Only process completed matches
        if (status !== 'STATUS_FULL_TIME' && status !== 'STATUS_FINAL') continue;

        const competitors = competition?.competitors;
        if (!competitors || competitors.length < 2) continue;

        // ESPN always returns home first
        const homeComp = competitors.find(c => c.homeAway === 'home');
        const awayComp = competitors.find(c => c.homeAway === 'away');
        if (!homeComp || !awayComp) continue;

        const homeScore = parseInt(homeComp.score, 10);
        const awayScore = parseInt(awayComp.score, 10);
        if (isNaN(homeScore) || isNaN(awayScore)) continue;

        const result = determineResult(homeScore, awayScore);

        // Only update if not already set (don't overwrite manual admin entries)
        if (!state.results[matchId]) {
          state.results[matchId] = result;
          updated = true;
        }

        // Always update actual scores
        if (!state.scores.actual[matchId] ||
            state.scores.actual[matchId].h !== homeScore ||
            state.scores.actual[matchId].a !== awayScore) {
          state.scores.actual[matchId] = { h: homeScore, a: awayScore };
          updated = true;
        }

        statusReport.push(`${matchId}: ${homeScore}-${awayScore} (${result})`);

      } catch (matchErr) {
        // Skip this match silently and continue
        continue;
      }
    }

    // Push updated state back to JSONbin if anything changed
    if (updated) {
      await pushJsonbin(state);
    }

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        success: true,
        updated,
        matches: statusReport,
        timestamp: new Date().toISOString()
      })
    };

  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ success: false, error: err.message })
    };
  }
};
