const JSONBIN_URL = 'https://api.jsonbin.io/v3/b/69cf10f4aaba882197bd33b3';
const JSONBIN_KEY = '$2a$10$5HVidNxSNjNWGXO8oHVhzOdXuhS7r4a7nqbj010pi3pNV/5Wfpy4q';
const ESPN_SCOREBOARD = 'https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard';

// Maps ESPN team abbreviations to your internal codes
// ESPN uses different abbreviations for some teams
const ESPN_TO_INTERNAL = {
  MEX: 'MEX', RSA: 'RSA', KOR: 'KOR', CZE: 'CZE',
  CAN: 'CAN', BIH: 'BIH', QAT: 'QAT', SUI: 'SUI',
  BRA: 'BRA', MAR: 'MAR', HAI: 'HAI', SCO: 'SCO',
  USA: 'USA', PAR: 'PAR', AUS: 'AUS', TUR: 'TUR',
  GER: 'GER', CUR: 'CUR', CIV: 'CIV', ECU: 'ECU',
  NED: 'NED', JPN: 'JPN', SWE: 'SWE', TUN: 'TUN',
  BEL: 'BEL', EGY: 'EGY', IRN: 'IRN', NZL: 'NZL',
  ESP: 'ESP', CPV: 'CPV', KSA: 'KSA', URU: 'URU',
  FRA: 'FRA', SEN: 'SEN', IRQ: 'IRQ', NOR: 'NOR',
  ARG: 'ARG', ALG: 'ALG', AUT: 'AUT', JOR: 'JOR',
  POR: 'POR', COD: 'COD', UZB: 'UZB', COL: 'COL',
  ENG: 'ENG', SRB: 'SRB', PAN: 'PAN', CRO: 'CRO',
  GHA: 'GHA',
  // ESPN alternate abbreviations
  KORS: 'KOR',  // South Korea
  SBA: 'SRB',   // Serbia
  CRM: 'CIV',   // Ivory Coast (Côte d'Ivoire)
  BOI: 'BIH',   // Bosnia
  BOS: 'BIH',
  CPV2: 'CPV',
  KVX: 'CPV',
};

// Your match definitions — identified by home/away team codes
const MATCHES = [
  { id: 'M01', h: 'MEX', a: 'RSA' },
  { id: 'M02', h: 'KOR', a: 'CZE' },
  { id: 'M03', h: 'CAN', a: 'BIH' },
  { id: 'M04', h: 'USA', a: 'PAR' },
  { id: 'M05', h: 'AUS', a: 'TUR' },
  { id: 'M06', h: 'QAT', a: 'SUI' },
  { id: 'M07', h: 'BRA', a: 'MAR' },
  { id: 'M08', h: 'HAI', a: 'SCO' },
  { id: 'M09', h: 'GER', a: 'CUR' },
  { id: 'M10', h: 'NED', a: 'JPN' },
  { id: 'M11', h: 'CIV', a: 'ECU' },
  { id: 'M12', h: 'SWE', a: 'TUN' },
  { id: 'M13', h: 'ESP', a: 'CPV' },
  { id: 'M14', h: 'BEL', a: 'EGY' },
  { id: 'M15', h: 'KSA', a: 'URU' },
  { id: 'M16', h: 'IRN', a: 'NZL' },
  { id: 'M17', h: 'FRA', a: 'SEN' },
  { id: 'M18', h: 'IRQ', a: 'NOR' },
  { id: 'M19', h: 'ARG', a: 'ALG' },
  { id: 'M20', h: 'AUT', a: 'JOR' },
  { id: 'M21', h: 'POR', a: 'COD' },
  { id: 'M22', h: 'ENG', a: 'CRO' },
  { id: 'M23', h: 'GHA', a: 'PAN' },
  { id: 'M24', h: 'UZB', a: 'COL' },
  { id: 'M25', h: 'CZE', a: 'RSA' },
  { id: 'M26', h: 'SUI', a: 'BIH' },
  { id: 'M27', h: 'CAN', a: 'QAT' },
  { id: 'M28', h: 'MEX', a: 'KOR' },
  { id: 'M29', h: 'TUR', a: 'PAR' },
  { id: 'M30', h: 'USA', a: 'AUS' },
  { id: 'M31', h: 'SCO', a: 'MAR' },
  { id: 'M32', h: 'BRA', a: 'HAI' },
  { id: 'M33', h: 'TUN', a: 'JPN' },
  { id: 'M34', h: 'NED', a: 'SWE' },
  { id: 'M35', h: 'GER', a: 'CIV' },
  { id: 'M36', h: 'ECU', a: 'CUR' },
  { id: 'M37', h: 'ESP', a: 'KSA' },
  { id: 'M38', h: 'BEL', a: 'IRN' },
  { id: 'M39', h: 'URU', a: 'CPV' },
  { id: 'M40', h: 'NZL', a: 'EGY' },
  { id: 'M41', h: 'ARG', a: 'AUT' },
  { id: 'M42', h: 'FRA', a: 'IRQ' },
  { id: 'M43', h: 'NOR', a: 'SEN' },
  { id: 'M44', h: 'JOR', a: 'ALG' },
  { id: 'M45', h: 'POR', a: 'UZB' },
  { id: 'M46', h: 'ENG', a: 'GHA' },
  { id: 'M47', h: 'PAN', a: 'CRO' },
  { id: 'M48', h: 'COL', a: 'COD' },
  { id: 'M49', h: 'SUI', a: 'CAN' },
  { id: 'M50', h: 'BIH', a: 'QAT' },
  { id: 'M51', h: 'SCO', a: 'BRA' },
  { id: 'M52', h: 'MAR', a: 'HAI' },
  { id: 'M53', h: 'CZE', a: 'MEX' },
  { id: 'M54', h: 'RSA', a: 'KOR' },
  { id: 'M55', h: 'CUR', a: 'CIV' },
  { id: 'M56', h: 'ECU', a: 'GER' },
  { id: 'M57', h: 'JPN', a: 'SWE' },
  { id: 'M58', h: 'TUN', a: 'NED' },
  { id: 'M59', h: 'TUR', a: 'USA' },
  { id: 'M60', h: 'PAR', a: 'AUS' },
  { id: 'M61', h: 'NOR', a: 'FRA' },
  { id: 'M62', h: 'SEN', a: 'IRQ' },
  { id: 'M63', h: 'CPV', a: 'KSA' },
  { id: 'M64', h: 'URU', a: 'ESP' },
  { id: 'M65', h: 'EGY', a: 'IRN' },
  { id: 'M66', h: 'NZL', a: 'BEL' },
  { id: 'M67', h: 'PAN', a: 'ENG' },
  { id: 'M68', h: 'CRO', a: 'GHA' },
  { id: 'M69', h: 'COL', a: 'POR' },
  { id: 'M70', h: 'COD', a: 'UZB' },
  { id: 'M71', h: 'ALG', a: 'AUT' },
  { id: 'M72', h: 'JOR', a: 'ARG' },
];

async function fetchJsonbin() {
  const r = await fetch(JSONBIN_URL, {
    headers: { 'X-Master-Key': JSONBIN_KEY, 'X-Bin-Versioning': 'false' }
  });
  if (!r.ok) throw new Error(`JSONbin fetch failed: ${r.status}`);
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

function normalizeAbbr(abbr) {
  if (!abbr) return '';
  const upper = abbr.toUpperCase();
  return ESPN_TO_INTERNAL[upper] || upper;
}

function determineResult(homeScore, awayScore) {
  if (homeScore > awayScore) return 'home';
  if (awayScore > homeScore) return 'away';
  return 'draw';
}

exports.handler = async function () {
  try {
    // ONE call gets all of today's matches
    const espnRes = await fetch(ESPN_SCOREBOARD);
    if (!espnRes.ok) throw new Error(`ESPN scoreboard failed: ${espnRes.status}`);
    const espnData = await espnRes.json();
    const events = espnData?.events || [];

    // Build lookup: "HOME_CODE vs AWAY_CODE" -> competition data
    const espnByTeams = {};
    for (const ev of events) {
      const comp = ev?.competitions?.[0];
      if (!comp) continue;
      const home = comp.competitors?.find(c => c.homeAway === 'home');
      const away = comp.competitors?.find(c => c.homeAway === 'away');
      if (!home || !away) continue;
      const homeCode = normalizeAbbr(home.team?.abbreviation);
      const awayCode = normalizeAbbr(away.team?.abbreviation);
      const key = `${homeCode}v${awayCode}`;
      espnByTeams[key] = {
        status: comp.status?.type?.name,
        homeScore: parseInt(home.score, 10),
        awayScore: parseInt(away.score, 10),
      };
    }

    // Fetch current state from JSONbin
    const state = await fetchJsonbin();
    if (!state.results) state.results = {};
    if (!state.scores) state.scores = {};
    if (!state.scores.actual) state.scores.actual = {};

    let updated = false;
    const statusReport = [];
    const notFound = [];

    for (const match of MATCHES) {
      const key = `${match.h}v${match.a}`;
      const espn = espnByTeams[key];

      if (!espn) {
        // Not in today's scoreboard — not played yet, skip silently
        notFound.push(key);
        continue;
      }

      const { status, homeScore, awayScore } = espn;

      // Only process fully completed matches
      if (status !== 'STATUS_FULL_TIME' && status !== 'STATUS_FINAL') continue;
      if (isNaN(homeScore) || isNaN(awayScore)) continue;

      const result = determineResult(homeScore, awayScore);

      // Never overwrite a manually set admin result
      if (!state.results[match.id]) {
        state.results[match.id] = result;
        updated = true;
      }

      // Always sync actual score for exact score bonus
      const existing = state.scores.actual[match.id];
      if (!existing || existing.h !== homeScore || existing.a !== awayScore) {
        state.scores.actual[match.id] = { h: homeScore, a: awayScore };
        updated = true;
      }

      statusReport.push(`${match.id}: ${match.h} ${homeScore}-${awayScore} ${match.a} (${result})`);
    }

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
        notInTodayScoreboard: notFound.length,
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
