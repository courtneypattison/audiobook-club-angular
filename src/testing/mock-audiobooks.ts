export const mockIdentifier = 'art_of_war_librivox';

export const mockIdentifiers = {
    'response': {
      'docs': [
        {'identifier': 'tom_sawyer_librivox'},
        {'identifier': 'moby_dick_librivox'},
        {'identifier': 'adventures_holmes'},
        {'identifier': 'alice_in_wonderland_librivox'},
        {'identifier': 'art_of_war_librivox'}
      ]
    }
  };

export const mockAudiobookShortLength = {
  'metadata': {
    'identifier': [
      'tom_sawyer_librivox'
    ],
    'runtime': [
      '46:12'
    ]
  }
};

export const mockAudiobookNanLength = {
  'metadata': {
    'identifier': [
      'tom_sawyer_librivox'
    ],
    'runtime': [
      'not runtime'
    ]
  }
};

export const mockAudiobookLongLength = {
  'metadata': {
    'identifier': [
      'tom_sawyer_librivox'
    ],
    'runtime': [
      '10:20:30:40'
    ]
  }
};

export const mockAudiobookWithoutDetails = {
  'metadata': {
    'identifier': [
      'tom_sawyer_librivox'
    ]
  }
};

export const mockAudiobookWithoutRating = {
  'metadata': {
    'identifier': [
      'tom_sawyer_librivox'
    ]
  },
  'reviews': {
    'info': { }
  }
};

export const mockAudiobookDetails = {
    'metadata': {
      'identifier': [
        'tom_sawyer_librivox'
      ],
      'title': [
        'The Adventures of Tom Sawyer'
      ],
      'creator': [
        'Mark Twain'
      ],
      'description': [
        '<a href=\'http://librivox.org/\' rel=\'nofollow\'>LibriVox</a> recording of <i>The Adventures of Tom Sawyer</i> by Mark Twain.\n\n'
      ],
      'subject': [
        'librivox;  audiobook;  literature'
      ],
      'runtime': [
        '6:46:12'
      ]
    },
    'reviews': {
      'info': {
        'avg_rating': '4.83'
      }
    },
    'files': {
      '/AdventuresOfTomSawyer-32kb-Part1_librivox.m4b': {
        'source': 'original',
        'format': 'LibriVox Apple Audiobook',
        'mtime': '1426370656',
        'size': '26961533',
        'md5': '0f75153b9e6605dd948f55ea1ed5faaf',
        'crc32': '97373dae',
        'sha1': 'bbf3de16f5e40d47b895524b0ed19d8c51f01b12'
      },
      '/AdventuresOfTomSawyer-32kb-Part2_librivox.m4b': {
        'source': 'original',
        'format': 'LibriVox Apple Audiobook',
        'mtime': '1426370886',
        'size': '23771096',
        'md5': 'f5dd1516079bad7e2f084b847655ab48',
        'crc32': 'ab2b0dc9',
        'sha1': '306d7c1a59f970d2c62981a0bc80ec873574d4ea'
      },
      '/AdventuresOfTomSawyer-64kb-Part1_librivox.m4b': {
        'source': 'original',
        'format': 'LibriVox Apple Audiobook',
        'mtime': '1426372107',
        'size': '105240609',
        'md5': '30250119a0df253c3262d2d154e5e774',
        'crc32': '9b0eb882',
        'sha1': '0b38ca6a06890c3a65a13d001e4a98594bd1ecc7'
      },
      '/AdventuresOfTomSawyer-64kb-Part2_librivox.m4b': {
        'source': 'original',
        'format': 'LibriVox Apple Audiobook',
        'mtime': '1426373020',
        'size': '92759966',
        'md5': '9c2e6bc29decee03c94fa49f42c39fac',
        'crc32': '52473d10',
        'sha1': '5c18e39e73aaeb7de73f52f560b858ad3f6c46aa'
      },
      '/TSawyer_01-02_twain.afpk': {
        'source': 'derivative',
        'format': 'Columbia Peaks',
        'original': 'TSawyer_01-02_twain.mp3',
        'mtime': '1419836216',
        'size': '252664',
        'md5': '2f9ad192d16331d27da17a0be23e8680',
        'crc32': 'ec422314',
        'sha1': 'a0f850490be6294218599aaaaf628188cd35b725'
      },
      '/TSawyer_01-02_twain.mp3': {
        'source': 'original',
        'format': '128Kbps MP3',
        'creator': 'Mark Twain',
        'album': 'The Adventures of Tom Sawyer',
        'title': 'Chapter 01-02',
        'track': '1/17',
        'md5': '0177c9e783a598d80fa3769be8f858d5',
        'mtime': '1146467674',
        'size': '25581279',
        'crc32': '8eaa5df3',
        'sha1': '98940ced6ca4781923d9e0798583ab4e1108991d',
        'length': '1598.82',
        'height': '0',
        'width': '0',
        'artist': 'Mark Twain',
        'genre': 'Speech'
      },
      '/TSawyer_01-02_twain.ogg': {
        'source': 'derivative',
        'format': 'Ogg Vorbis',
        'original': 'TSawyer_01-02_twain.mp3',
        'md5': 'ee61a5c031aac441c0cb14c3895e4de5',
        'mtime': '1158694242',
        'size': '17227714',
        'crc32': '16c4257a',
        'sha1': '7d075f451bdf49cf593291b46f26a7312ca5d6bb',
        'length': '1598.18',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_01-02_twain.png': {
        'source': 'derivative',
        'format': 'PNG',
        'original': 'TSawyer_01-02_twain.mp3',
        'mtime': '1419832531',
        'size': '11210',
        'md5': 'ea9d75ef0755a157b6a04f877ae053bb',
        'crc32': '4fedb746',
        'sha1': 'f984d4c4614d53718abfcfb789cfbaa68cf25e24'
      },
      '/TSawyer_01-02_twain_64kb.mp3': {
        'source': 'derivative',
        'creator': 'Mark Twain',
        'title': 'Chapter 01-02',
        'album': 'The Adventures of Tom Sawyer',
        'bitrate': '64',
        'length': '26:38',
        'format': '64Kbps MP3',
        'original': 'TSawyer_01-02_twain.mp3',
        'track': '1/17',
        'md5': '6b08698f44fe84cbcbc2a51fc17a7847',
        'mtime': '1158692648',
        'size': '12789887',
        'crc32': '9508a7c3',
        'sha1': '5f92dce2d790b3f85cf55905a522bdd6cc5e13ac',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_01-02_twain_esshigh.json.gz': {
        'source': 'derivative',
        'format': 'Essentia High GZ',
        'original': 'TSawyer_01-02_twain_esslow.json.gz',
        'mtime': '1419837193',
        'size': '1968',
        'md5': 'd6f390a589bbded54090f7b512c49876',
        'crc32': '6dd99b27',
        'sha1': '7df4a4b4da6f8d0c0b80fa713e2851389bdaa0e5'
      },
      '/TSawyer_01-02_twain_esslow.json.gz': {
        'source': 'derivative',
        'format': 'Essentia Low GZ',
        'original': 'TSawyer_01-02_twain.mp3',
        'mtime': '1419833459',
        'size': '40079',
        'md5': '0482ebec23e3625d0357db353edb3508',
        'crc32': '3d1f3144',
        'sha1': '93650e9099fa09af3b52f321adcf11bfe040b59c'
      },
      '/TSawyer_01-02_twain_spectrogram.png': {
        'source': 'derivative',
        'format': 'Spectrogram',
        'original': 'TSawyer_01-02_twain.mp3',
        'mtime': '1419833207',
        'size': '296928',
        'md5': '85624c0186b759fb83d7d54a8c5f5f35',
        'crc32': '88303c5c',
        'sha1': '028d658b3d160302c4400e0745154c53d3fdde92'
      },
      '/TSawyer_03-04_twain.afpk': {
        'source': 'derivative',
        'format': 'Columbia Peaks',
        'original': 'TSawyer_03-04_twain.mp3',
        'mtime': '1419836844',
        'size': '304104',
        'md5': '3f8e9903004535322b8ef8aa84b1affc',
        'crc32': 'fa8c574d',
        'sha1': '5775e9cc730bd21e872d23e6f5a686457712abf4'
      },
      '/TSawyer_03-04_twain.mp3': {
        'source': 'original',
        'format': '128Kbps MP3',
        'creator': 'Mark Twain',
        'album': 'The Adventures of Tom Sawyer',
        'title': 'Chapter 03-04',
        'track': '2/17',
        'md5': 'b51f547c6a48a76788e97a840c9ef295',
        'mtime': '1146467656',
        'size': '31655478',
        'crc32': 'f0f38f2a',
        'sha1': '4ec47fb80ffa45a36a0d19a10c40698f25f103be',
        'length': '1978.46',
        'height': '0',
        'width': '0',
        'artist': 'Mark Twain',
        'genre': 'Speech'
      },
      '/TSawyer_03-04_twain.ogg': {
        'source': 'derivative',
        'format': 'Ogg Vorbis',
        'original': 'TSawyer_03-04_twain.mp3',
        'md5': '1636e0c25fdc5fcede48a5c554a0ceb9',
        'mtime': '1158693869',
        'size': '21584907',
        'crc32': '40236ca0',
        'sha1': '55611d3a61a93d3475dc730677e455c651cb6b47',
        'length': '1977.87',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_03-04_twain.png': {
        'source': 'derivative',
        'format': 'PNG',
        'original': 'TSawyer_03-04_twain.mp3',
        'mtime': '1419832397',
        'size': '10778',
        'md5': '9c218a5b346ce499d582bbeb2e228710',
        'crc32': '80e127aa',
        'sha1': '110a21b292ab69204674f4e9a261f9ae01866e8e'
      },
      '/TSawyer_03-04_twain_64kb.mp3': {
        'source': 'derivative',
        'creator': 'Mark Twain',
        'title': 'Chapter 03-04',
        'album': 'The Adventures of Tom Sawyer',
        'bitrate': '64',
        'length': '32:58',
        'format': '64Kbps MP3',
        'original': 'TSawyer_03-04_twain.mp3',
        'track': '2/17',
        'md5': '5d1b06b9d35f7c2b9b9ff7cd5a7772c6',
        'mtime': '1158693416',
        'size': '15826987',
        'crc32': '5fa5955d',
        'sha1': 'c4d6720362b1f22eea82a4def7bbb38628033b3b',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_03-04_twain_esshigh.json.gz': {
        'source': 'derivative',
        'format': 'Essentia High GZ',
        'original': 'TSawyer_03-04_twain_esslow.json.gz',
        'mtime': '1419837162',
        'size': '1974',
        'md5': 'ba6e224d13190195fb9e1b5ea878b2d6',
        'crc32': 'b76c6922',
        'sha1': 'f446b6fa4b8b8a1491c0a01201ef3a7134ecdc56'
      },
      '/TSawyer_03-04_twain_esslow.json.gz': {
        'source': 'derivative',
        'format': 'Essentia Low GZ',
        'original': 'TSawyer_03-04_twain.mp3',
        'mtime': '1419834416',
        'size': '44392',
        'md5': '8bfaf38ee8af3a4ddf98cd86f964d1cb',
        'crc32': '74160f37',
        'sha1': '056100a85112c6884ee0512998a465cb9c31dcae'
      },
      '/TSawyer_03-04_twain_spectrogram.png': {
        'source': 'derivative',
        'format': 'Spectrogram',
        'original': 'TSawyer_03-04_twain.mp3',
        'mtime': '1419833132',
        'size': '289758',
        'md5': '86fd8f188c0655ed6ce8d51943d686a8',
        'crc32': '4849c2d5',
        'sha1': '3ca2d59d08c168e064bd7c04c8f1757b668e3675'
      },
      '/TSawyer_05-06_twain.afpk': {
        'source': 'derivative',
        'format': 'Columbia Peaks',
        'original': 'TSawyer_05-06_twain.mp3',
        'mtime': '1419836912',
        'size': '296840',
        'md5': '185aacaba11617fdd6a7eb73631a00cf',
        'crc32': '41353d7f',
        'sha1': '0e9f857e3b2cf0d6715dfe0748dfd8d093b4cea3'
      },
      '/TSawyer_05-06_twain.mp3': {
        'source': 'original',
        'format': '128Kbps MP3',
        'creator': 'Mark Twain',
        'album': 'The Adventures of Tom Sawyer',
        'title': 'Chapter 05-06',
        'track': '3/17',
        'md5': 'efd59b1bcef599bccf58c6da66f89731',
        'mtime': '1146467636',
        'size': '30591806',
        'crc32': '48498e9e',
        'sha1': 'd65b425e0d0b2b2bf252a70f1ecd892fbfa3532c',
        'length': '1911.98',
        'height': '0',
        'width': '0',
        'artist': 'Mark Twain',
        'genre': 'Speech'
      },
      '/TSawyer_05-06_twain.ogg': {
        'source': 'derivative',
        'format': 'Ogg Vorbis',
        'original': 'TSawyer_05-06_twain.mp3',
        'md5': 'f32bc04ad4020bf0f13406579b605e70',
        'mtime': '1158694551',
        'size': '20838021',
        'crc32': 'a604ed57',
        'sha1': '29b2fee224513052915f1bdb44a54f0c0a40c4ed',
        'length': '1911.49',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_05-06_twain.png': {
        'source': 'derivative',
        'format': 'PNG',
        'original': 'TSawyer_05-06_twain.mp3',
        'mtime': '1419832285',
        'size': '11574',
        'md5': '88685acc6e49b39b63f2adeb2c34ce21',
        'crc32': '707571b6',
        'sha1': '138bc2b1033857f9f418a16b6b7a16ab99948de9'
      },
      '/TSawyer_05-06_twain_64kb.mp3': {
        'source': 'derivative',
        'creator': 'Mark Twain',
        'title': 'Chapter 05-06',
        'album': 'The Adventures of Tom Sawyer',
        'bitrate': '64',
        'length': '31:51',
        'format': '64Kbps MP3',
        'original': 'TSawyer_05-06_twain.mp3',
        'track': '3/17',
        'md5': '48eef2699b158dddf95dede26636d875',
        'mtime': '1158693590',
        'size': '15295134',
        'crc32': '14139372',
        'sha1': 'd2893faeb8e0bf40969e4dc4616297bd44995ba5',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_05-06_twain_esshigh.json.gz': {
        'source': 'derivative',
        'format': 'Essentia High GZ',
        'original': 'TSawyer_05-06_twain_esslow.json.gz',
        'mtime': '1419837157',
        'size': '1972',
        'md5': '307f99931b7e2d3f2e9db7df1718f3bf',
        'crc32': 'ce3fafed',
        'sha1': 'f9b29ead509c256d08a21185156e2d6e3e76d03b'
      },
      '/TSawyer_05-06_twain_esslow.json.gz': {
        'source': 'derivative',
        'format': 'Essentia Low GZ',
        'original': 'TSawyer_05-06_twain.mp3',
        'mtime': '1419836154',
        'size': '42630',
        'md5': 'e78e2c70a854d46a676116c0318219a1',
        'crc32': 'bcaa2b05',
        'sha1': 'b08083fee8c7f7e873c1f4fb9465aa6026282861'
      },
      '/TSawyer_05-06_twain_spectrogram.png': {
        'source': 'derivative',
        'format': 'Spectrogram',
        'original': 'TSawyer_05-06_twain.mp3',
        'mtime': '1419833002',
        'size': '297115',
        'md5': '4677e65538f6e29eedd47a1465ed924d',
        'crc32': '135d29f7',
        'sha1': '2f3ff6433347e1d450d788269864e9d9f85b9328'
      },
      '/TSawyer_07-08_twain.afpk': {
        'source': 'derivative',
        'format': 'Columbia Peaks',
        'original': 'TSawyer_07-08_twain.mp3',
        'mtime': '1419836514',
        'size': '202320',
        'md5': '0f6bd39568c6bb517b2b8528d61ddb98',
        'crc32': '8bc08a30',
        'sha1': '2a20511caa4fd8d04498307a04a2ebc0d908afea'
      },
      '/TSawyer_07-08_twain.mp3': {
        'source': 'original',
        'format': '128Kbps MP3',
        'creator': 'Mark Twain',
        'album': 'The Adventures of Tom Sawyer',
        'title': 'Chapter 07-08',
        'track': '4/17',
        'md5': 'cd0a72fdce7dcaf2def0cb2a147f2bfe',
        'mtime': '1146467617',
        'size': '20494745',
        'crc32': '03b24fb9',
        'sha1': '70a961f368be9d08b41c455ef3fa58330e5e7375',
        'length': '1280.92',
        'height': '0',
        'width': '0',
        'artist': 'Mark Twain',
        'genre': 'Speech'
      },
      '/TSawyer_07-08_twain.ogg': {
        'source': 'derivative',
        'format': 'Ogg Vorbis',
        'original': 'TSawyer_07-08_twain.mp3',
        'md5': '643df7279b2d3065c332be97a2595952',
        'mtime': '1158695126',
        'size': '13469172',
        'crc32': 'cffc181b',
        'sha1': 'd3fcdd41f6d3207b049d3c7a21a108c79e24b236',
        'length': '1280.31',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_07-08_twain.png': {
        'source': 'derivative',
        'format': 'PNG',
        'original': 'TSawyer_07-08_twain.mp3',
        'mtime': '1419832850',
        'size': '9463',
        'md5': '273b72b89cfdf6917ca0f47dae5e7427',
        'crc32': '37c2511f',
        'sha1': 'a5da8cb5f876556c75b7437aefe1f57632997f09'
      },
      '/TSawyer_07-08_twain_64kb.mp3': {
        'source': 'derivative',
        'creator': 'Mark Twain',
        'title': 'Chapter 07-08',
        'album': 'The Adventures of Tom Sawyer',
        'bitrate': '64',
        'length': '21:20',
        'format': '64Kbps MP3',
        'original': 'TSawyer_07-08_twain.mp3',
        'track': '4/17',
        'md5': '49e53cf911dc32a3611f8d84e297959c',
        'mtime': '1158693487',
        'size': '10246605',
        'crc32': '760130a8',
        'sha1': '6d3d4cebcb96cb706e93a05df6c968dd85b2f8be',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_07-08_twain_esshigh.json.gz': {
        'source': 'derivative',
        'format': 'Essentia High GZ',
        'original': 'TSawyer_07-08_twain_esslow.json.gz',
        'mtime': '1419837152',
        'size': '1968',
        'md5': 'd0a1a2781c9ef73189cddb6bbdd96edb',
        'crc32': '8f18efa4',
        'sha1': '840310a32668fb9f9c1846e4e5df2f5775e2d7d0'
      },
      '/TSawyer_07-08_twain_esslow.json.gz': {
        'source': 'derivative',
        'format': 'Essentia Low GZ',
        'original': 'TSawyer_07-08_twain.mp3',
        'mtime': '1419833613',
        'size': '36875',
        'md5': '82ee248a1a556e5765ef7263ac8254b5',
        'crc32': 'b114e41d',
        'sha1': '22adb3064497dbba69e7c031891ac8ba405bfb67'
      },
      '/TSawyer_07-08_twain_spectrogram.png': {
        'source': 'derivative',
        'format': 'Spectrogram',
        'original': 'TSawyer_07-08_twain.mp3',
        'mtime': '1419832974',
        'size': '297689',
        'md5': '6d5e6bc6a58e33332f5c7899d085aa42',
        'crc32': '6d46dc41',
        'sha1': '943e95f15757f13a0b47d1795b8f225bc6059618'
      },
      '/TSawyer_09-10_twain.afpk': {
        'source': 'derivative',
        'format': 'Columbia Peaks',
        'original': 'TSawyer_09-10_twain.mp3',
        'mtime': '1419836568',
        'size': '222712',
        'md5': 'c6ec95c02cbb138798ffc8b372c9567d',
        'crc32': '6962f987',
        'sha1': 'cbfd325859ed35a9047a825c8967f2aefe86d5d9'
      },
      '/TSawyer_09-10_twain.mp3': {
        'source': 'original',
        'format': '128Kbps MP3',
        'creator': 'Mark Twain',
        'album': 'The Adventures of Tom Sawyer',
        'title': 'Chapter 09-10',
        'track': '5/17',
        'md5': '3d575691758d9d3963cbf6da9af35d65',
        'mtime': '1146467603',
        'size': '22654339',
        'crc32': 'a80b4cd0',
        'sha1': 'c56fd1db8b002ba6a1e41862b5573731431f0560',
        'length': '1415.89',
        'height': '0',
        'width': '0',
        'artist': 'Mark Twain',
        'genre': 'Speech'
      },
      '/TSawyer_09-10_twain.ogg': {
        'source': 'derivative',
        'format': 'Ogg Vorbis',
        'original': 'TSawyer_09-10_twain.mp3',
        'md5': 'ac13993743fe913b566406531a46f147',
        'mtime': '1158694759',
        'size': '15009514',
        'crc32': '20aba467',
        'sha1': '710301b6370219bd3a48466ed18166cc67627f8d',
        'length': '1415.29',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_09-10_twain.png': {
        'source': 'derivative',
        'format': 'PNG',
        'original': 'TSawyer_09-10_twain.mp3',
        'mtime': '1419832935',
        'size': '9428',
        'md5': '25c600025bb48b70cb7f50402c58051c',
        'crc32': '9202d939',
        'sha1': 'b02dbf0fc3028b39e305335c690b0b03eeb5478b'
      },
      '/TSawyer_09-10_twain_64kb.mp3': {
        'source': 'derivative',
        'creator': 'Mark Twain',
        'title': 'Chapter 09-10',
        'album': 'The Adventures of Tom Sawyer',
        'bitrate': '64',
        'length': '23:35',
        'format': '64Kbps MP3',
        'original': 'TSawyer_09-10_twain.mp3',
        'track': '5/17',
        'md5': '843ecf6e738ea09de9e3fd5312e733ab',
        'mtime': '1158693667',
        'size': '11326402',
        'crc32': '5043da95',
        'sha1': '6a3b4a818db1b65de3ba92a0237bc0e1772defee',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_09-10_twain_esshigh.json.gz': {
        'source': 'derivative',
        'format': 'Essentia High GZ',
        'original': 'TSawyer_09-10_twain_esslow.json.gz',
        'mtime': '1419837167',
        'size': '1967',
        'md5': '2c99220e168f1294c83864f895257b09',
        'crc32': 'a781dc6d',
        'sha1': '59bafcbb8eda479e13db144ccd34ccc7bb05a4dc'
      },
      '/TSawyer_09-10_twain_esslow.json.gz': {
        'source': 'derivative',
        'format': 'Essentia Low GZ',
        'original': 'TSawyer_09-10_twain.mp3',
        'mtime': '1419835088',
        'size': '38749',
        'md5': 'dd7c1b7affb1e7aa1aef956ab5344c98',
        'crc32': '5c296f37',
        'sha1': '19d7c55b89a05ec9cebe1153a78a029b9b7e16bc'
      },
      '/TSawyer_09-10_twain_spectrogram.png': {
        'source': 'derivative',
        'format': 'Spectrogram',
        'original': 'TSawyer_09-10_twain.mp3',
        'mtime': '1419833031',
        'size': '298563',
        'md5': 'de622b42d2e3bddd9d3acb0108339d72',
        'crc32': '30cbb7b9',
        'sha1': '75bbab7c68e3605bb0812dde20ac5aeb429b3d4d'
      },
      '/TSawyer_11-12_twain.afpk': {
        'source': 'derivative',
        'format': 'Columbia Peaks',
        'original': 'TSawyer_11-12_twain.mp3',
        'mtime': '1419836770',
        'size': '180792',
        'md5': '1562fa52415ce9fd3dcc69e3d2587ef1',
        'crc32': '385a9571',
        'sha1': 'f54f7981786cd8f4a10fb5edda3eb62e8cb2fcc0'
      },
      '/TSawyer_11-12_twain.mp3': {
        'source': 'original',
        'format': '128Kbps MP3',
        'creator': 'Mark Twain',
        'album': 'The Adventures of Tom Sawyer',
        'title': 'Chapter 11-12',
        'track': '6/17',
        'md5': '2555bea75213d7e8fea4aa73dca4542b',
        'mtime': '1146467588',
        'size': '18264097',
        'crc32': 'b960b3c1',
        'sha1': '0880a811beb0a89fb6e0032c2eb0c1e86454ca3d',
        'length': '1141.5',
        'height': '0',
        'width': '0',
        'artist': 'Mark Twain',
        'genre': 'Speech'
      },
      '/TSawyer_11-12_twain.ogg': {
        'source': 'derivative',
        'format': 'Ogg Vorbis',
        'original': 'TSawyer_11-12_twain.mp3',
        'md5': '52564d1cf7d6193421f02af1ebba2582',
        'mtime': '1158695207',
        'size': '12183865',
        'crc32': 'cfb253aa',
        'sha1': 'fec375b29a02a27a2c9ef1cbe628454d5c1980ce',
        'length': '1140.97',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_11-12_twain.png': {
        'source': 'derivative',
        'format': 'PNG',
        'original': 'TSawyer_11-12_twain.mp3',
        'mtime': '1419832882',
        'size': '10805',
        'md5': '4ba0fb4e39b8fd530f4cbcb3568d5ca7',
        'crc32': '31971974',
        'sha1': 'be7bd9e9bd626075fdb999bfd9b02bb0960c638f'
      },
      '/TSawyer_11-12_twain_64kb.mp3': {
        'source': 'derivative',
        'creator': 'Mark Twain',
        'title': 'Chapter 11-12',
        'album': 'The Adventures of Tom Sawyer',
        'bitrate': '64',
        'length': '19:01',
        'format': '64Kbps MP3',
        'original': 'TSawyer_11-12_twain.mp3',
        'track': '6/17',
        'md5': 'dea1a8c979f9365a9676719705993738',
        'mtime': '1158693730',
        'size': '9131281',
        'crc32': 'f5cc373d',
        'sha1': '178d6ffad4ed58a332809581001e1b62f8c02d69',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_11-12_twain_esshigh.json.gz': {
        'source': 'derivative',
        'format': 'Essentia High GZ',
        'original': 'TSawyer_11-12_twain_esslow.json.gz',
        'mtime': '1419837172',
        'size': '1985',
        'md5': 'f2978599d362e33d7642e4fa86f4fc09',
        'crc32': '87d7d081',
        'sha1': '710e912a546827d32837e0210d63a672d7e167c9'
      },
      '/TSawyer_11-12_twain_esslow.json.gz': {
        'source': 'derivative',
        'format': 'Essentia Low GZ',
        'original': 'TSawyer_11-12_twain.mp3',
        'mtime': '1419835774',
        'size': '35327',
        'md5': '7384532e08b4bb576361d1936d0429ba',
        'crc32': '4ac02a88',
        'sha1': 'f5cdfc950252a42ac369652fe49f88c75956624f'
      },
      '/TSawyer_11-12_twain_spectrogram.png': {
        'source': 'derivative',
        'format': 'Spectrogram',
        'original': 'TSawyer_11-12_twain.mp3',
        'mtime': '1419833015',
        'size': '303240',
        'md5': '94eb6039f04dab4191e0697be72a511c',
        'crc32': '33168714',
        'sha1': 'f93a1a19f3ada957df521c072310a457faab4b3d'
      },
      '/TSawyer_13-14-15_twain.afpk': {
        'source': 'derivative',
        'format': 'Columbia Peaks',
        'original': 'TSawyer_13-14-15_twain.mp3',
        'mtime': '1419836647',
        'size': '332064',
        'md5': '5c5691952d0318b954c4f5033174b804',
        'crc32': '33e70be4',
        'sha1': '6a8d0d8aa21ce31c075e37c1c493cf94f8d0eb0c'
      },
      '/TSawyer_13-14-15_twain.mp3': {
        'source': 'original',
        'format': '128Kbps MP3',
        'creator': 'Mark Twain',
        'album': 'The Adventures of Tom Sawyer',
        'title': 'Chapter 13-15',
        'track': '7/17',
        'md5': '4c8a2b338ddb54c2609264d4697bb12f',
        'mtime': '1146467576',
        'size': '34000264',
        'crc32': '98200d44',
        'sha1': 'c5ab4af624c535ce69cc01565066138264eafebb',
        'length': '2125.01',
        'height': '0',
        'width': '0',
        'artist': 'Mark Twain',
        'genre': 'Speech'
      },
      '/TSawyer_13-14-15_twain.ogg': {
        'source': 'derivative',
        'format': 'Ogg Vorbis',
        'original': 'TSawyer_13-14-15_twain.mp3',
        'md5': 'd87512037eee0510edc2a7f00257642b',
        'mtime': '1158694909',
        'size': '22532086',
        'crc32': '68cf21bd',
        'sha1': 'c4e7ad744e64529d22ad8612e7b560fca9473536',
        'length': '2124.37',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_13-14-15_twain.png': {
        'source': 'derivative',
        'format': 'PNG',
        'original': 'TSawyer_13-14-15_twain.mp3',
        'mtime': '1419832740',
        'size': '9790',
        'md5': 'bf920b68d994bd5ed97b03fa248fc0e6',
        'crc32': 'f1404477',
        'sha1': 'a64a18da8def760dbfce945c7c88220f6da06068'
      },
      '/TSawyer_13-14-15_twain_64kb.mp3': {
        'source': 'derivative',
        'creator': 'Mark Twain',
        'title': 'Chapter 13-15',
        'album': 'The Adventures of Tom Sawyer',
        'bitrate': '64',
        'length': '35:24',
        'format': '64Kbps MP3',
        'original': 'TSawyer_13-14-15_twain.mp3',
        'track': '7/17',
        'md5': '051399c8c157b5bfea07343f3e8994e4',
        'mtime': '1158693216',
        'size': '16999362',
        'crc32': '27035c85',
        'sha1': '1a4a834aa55e9c07f2761f74e56418c9b8d68439',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_13-14-15_twain_esshigh.json.gz': {
        'source': 'derivative',
        'format': 'Essentia High GZ',
        'original': 'TSawyer_13-14-15_twain_esslow.json.gz',
        'mtime': '1419837187',
        'size': '1968',
        'md5': '8dfa567c2535ee7030acf825754d46d6',
        'crc32': '44eda08f',
        'sha1': '4c2d2648a4d0efcbade016b20f1f06e7a192111a'
      },
      '/TSawyer_13-14-15_twain_esslow.json.gz': {
        'source': 'derivative',
        'format': 'Essentia Low GZ',
        'original': 'TSawyer_13-14-15_twain.mp3',
        'mtime': '1419834839',
        'size': '44814',
        'md5': 'bfcdf79acf2f8187aa10319aeccdd521',
        'crc32': '6e288624',
        'sha1': '89909293856beb54ae04bce6914c10ba4007bc73'
      },
      '/TSawyer_13-14-15_twain_spectrogram.png': {
        'source': 'derivative',
        'format': 'Spectrogram',
        'original': 'TSawyer_13-14-15_twain.mp3',
        'mtime': '1419833174',
        'size': '290252',
        'md5': 'f49703e989b0df5670d7801c73696c4e',
        'crc32': '743214c3',
        'sha1': 'c66ef7c37eaf045f5e6e5c44484411282664c966'
      },
      '/TSawyer_16-17_twain.afpk': {
        'source': 'derivative',
        'format': 'Columbia Peaks',
        'original': 'TSawyer_16-17_twain.mp3',
        'mtime': '1419837038',
        'size': '239936',
        'md5': '803088566c18172ccc6d6a19d2e2e226',
        'crc32': '8d5dbabf',
        'sha1': '6386872b77e0fc3bb681dafb2ae7a3e5bdc4f4a2'
      },
      '/TSawyer_16-17_twain.mp3': {
        'source': 'original',
        'format': '128Kbps MP3',
        'creator': 'Mark Twain',
        'album': 'The Adventures of Tom Sawyer',
        'title': 'Chapter 16-17',
        'track': '8/17',
        'md5': '956e74d274b5448081bdab9c65370cb6',
        'mtime': '1146467550',
        'size': '23944966',
        'crc32': '2c8fc6ac',
        'sha1': 'f2972a192b1f0014aa8320b7adaa276f01f1ef08',
        'length': '1496.56',
        'height': '0',
        'width': '0',
        'artist': 'Mark Twain',
        'genre': 'Speech'
      },
      '/TSawyer_16-17_twain.ogg': {
        'source': 'derivative',
        'format': 'Ogg Vorbis',
        'original': 'TSawyer_16-17_twain.mp3',
        'md5': '173f43890b0565dbe2bf1931503504b9',
        'mtime': '1158694659',
        'size': '15928053',
        'crc32': 'b5eee13d',
        'sha1': '0464427a59a76054e1e4cc5c508836eab3afe95e',
        'length': '1495.93',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_16-17_twain.png': {
        'source': 'derivative',
        'format': 'PNG',
        'original': 'TSawyer_16-17_twain.mp3',
        'mtime': '1419832448',
        'size': '9022',
        'md5': 'f3fde20ff76569f12c420c8a6c4b5d91',
        'crc32': '61ff3ab4',
        'sha1': '9471550751ba74f81576ae9b3b6524d11a233406'
      },
      '/TSawyer_16-17_twain_64kb.mp3': {
        'source': 'derivative',
        'creator': 'Mark Twain',
        'title': 'Chapter 16-17',
        'album': 'The Adventures of Tom Sawyer',
        'bitrate': '64',
        'length': '24:56',
        'format': '64Kbps MP3',
        'original': 'TSawyer_16-17_twain.mp3',
        'track': '8/17',
        'md5': '3758564098563e6d1b45f01b619ed66a',
        'mtime': '1158692730',
        'size': '11971731',
        'crc32': 'f5b2db1f',
        'sha1': 'f6c41455969bb1479ea64bf7de90341cd0d11ca6',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_16-17_twain_esshigh.json.gz': {
        'source': 'derivative',
        'format': 'Essentia High GZ',
        'original': 'TSawyer_16-17_twain_esslow.json.gz',
        'mtime': '1419837182',
        'size': '1959',
        'md5': '37450f214271f7af9508a44d8dbf8f96',
        'crc32': 'be589a55',
        'sha1': 'f7d30ac6fb118e9f7f82df3d4ddd09580fdc6b90'
      },
      '/TSawyer_16-17_twain_esslow.json.gz': {
        'source': 'derivative',
        'format': 'Essentia Low GZ',
        'original': 'TSawyer_16-17_twain.mp3',
        'mtime': '1419834592',
        'size': '38460',
        'md5': '60a3715144ce45086129694d50222ed1',
        'crc32': '1cb8fd0f',
        'sha1': 'f90074702d716cff8b0fe78d49aac538aad98ccb'
      },
      '/TSawyer_16-17_twain_spectrogram.png': {
        'source': 'derivative',
        'format': 'Spectrogram',
        'original': 'TSawyer_16-17_twain.mp3',
        'mtime': '1419833063',
        'size': '293663',
        'md5': '5623989292fe162f3fea7fdffa3ed0a0',
        'crc32': 'f5895dc8',
        'sha1': 'a61501e7e1f2f301f268dafc581a74dceba683c2'
      },
      '/TSawyer_18-19-20_twain.afpk': {
        'source': 'derivative',
        'format': 'Columbia Peaks',
        'original': 'TSawyer_18-19-20_twain.mp3',
        'mtime': '1419836469',
        'size': '272024',
        'md5': '4cee91de83dd032c392a83608bdce2b4',
        'crc32': '901c1c0e',
        'sha1': '0f07fa5b5e80a3ad3cede7b3c4dd3e99aff51980'
      },
      '/TSawyer_18-19-20_twain.mp3': {
        'source': 'original',
        'format': '128Kbps MP3',
        'creator': 'Mark Twain',
        'album': 'The Adventures of Tom Sawyer',
        'title': 'Chapter 18-20',
        'track': '9/17',
        'md5': '96f65fade4e4304fe42de15a6f5138d4',
        'mtime': '1146467534',
        'size': '27777687',
        'crc32': '2eeae0f2',
        'sha1': '88d23dae2fa6661f6b073c8398c6a43189f65141',
        'length': '1736.1',
        'height': '0',
        'width': '0',
        'artist': 'Mark Twain',
        'genre': 'Speech'
      },
      '/TSawyer_18-19-20_twain.ogg': {
        'source': 'derivative',
        'format': 'Ogg Vorbis',
        'original': 'TSawyer_18-19-20_twain.mp3',
        'md5': 'a136c3418c0764709622f7bc419457f0',
        'mtime': '1158695034',
        'size': '18281681',
        'crc32': '1ab63ee2',
        'sha1': '6e41a629ade7bbbc82385d6223aeaf2c8419baf6',
        'length': '1735.48',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_18-19-20_twain.png': {
        'source': 'derivative',
        'format': 'PNG',
        'original': 'TSawyer_18-19-20_twain.mp3',
        'mtime': '1419832679',
        'size': '9891',
        'md5': '3a95489088680c97f157b3e3d1e3737f',
        'crc32': 'df0dc1fc',
        'sha1': '7f2257127e9fc723e2f9eb2d1ed223981e2fc2b5'
      },
      '/TSawyer_18-19-20_twain_64kb.mp3': {
        'source': 'derivative',
        'creator': 'Mark Twain',
        'title': 'Chapter 18-20',
        'album': 'The Adventures of Tom Sawyer',
        'bitrate': '64',
        'length': '28:55',
        'format': '64Kbps MP3',
        'original': 'TSawyer_18-19-20_twain.mp3',
        'track': '9/17',
        'md5': '25c6fed10cbc6eb8ee25c61165be700f',
        'mtime': '1158693311',
        'size': '13888074',
        'crc32': '973eeb8b',
        'sha1': 'b9b4ea57146b89ae8ca6ee20460599e5f60db6a1',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_18-19-20_twain_esshigh.json.gz': {
        'source': 'derivative',
        'format': 'Essentia High GZ',
        'original': 'TSawyer_18-19-20_twain_esslow.json.gz',
        'mtime': '1419837177',
        'size': '1972',
        'md5': '36a54332048bb5d4bd236e08e16ed9c4',
        'crc32': 'd7d70a19',
        'sha1': '4d48f80346b222651ae3945ed62356934a066fa2'
      },
      '/TSawyer_18-19-20_twain_esslow.json.gz': {
        'source': 'derivative',
        'format': 'Essentia Low GZ',
        'original': 'TSawyer_18-19-20_twain.mp3',
        'mtime': '1419834179',
        'size': '40930',
        'md5': '28e3674f2fc87a2b3b88ef5d75766c56',
        'crc32': 'd33562c5',
        'sha1': 'f9afa1c43f6ae5082c7aa4ab6dc8e3738bca594d'
      },
      '/TSawyer_18-19-20_twain_spectrogram.png': {
        'source': 'derivative',
        'format': 'Spectrogram',
        'original': 'TSawyer_18-19-20_twain.mp3',
        'mtime': '1419833082',
        'size': '290964',
        'md5': 'a10f86dd14c7f2d23f13f18e29c836a1',
        'crc32': 'c39e6606',
        'sha1': 'bfebf0dd3a329f85c8840bb5450f723e7f732c2a'
      },
      '/TSawyer_21-22-23_twain.afpk': {
        'source': 'derivative',
        'format': 'Columbia Peaks',
        'original': 'TSawyer_21-22-23_twain.mp3',
        'mtime': '1419836365',
        'size': '296576',
        'md5': 'a4939224427920c9a0195b9fd3c304ad',
        'crc32': 'c6c516d0',
        'sha1': 'b52adee5b7626a7a13b44469a149fae9a3d0a794'
      },
      '/TSawyer_21-22-23_twain.mp3': {
        'source': 'original',
        'format': '128Kbps MP3',
        'creator': 'Mark Twain',
        'album': 'The Adventures of Tom Sawyer',
        'title': 'Chapter 21-23',
        'track': '10/17',
        'md5': 'e1a2bf6e74d586eb884e9b6b8d6fc4d4',
        'mtime': '1146467516',
        'size': '30362347',
        'crc32': 'abf0b3e1',
        'sha1': '54652ada773434672f87eceab088753b17401959',
        'length': '1897.64',
        'height': '0',
        'width': '0',
        'artist': 'Mark Twain',
        'genre': 'Speech'
      },
      '/TSawyer_21-22-23_twain.ogg': {
        'source': 'derivative',
        'format': 'Ogg Vorbis',
        'original': 'TSawyer_21-22-23_twain.mp3',
        'md5': 'd0581766a05ca8c17dba25e5bec29c53',
        'mtime': '1158695403',
        'size': '20247210',
        'crc32': 'e9c45b1e',
        'sha1': 'bf5ac0bf0658ecc790011d79531b9b461704da17',
        'length': '1897.02',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_21-22-23_twain.png': {
        'source': 'derivative',
        'format': 'PNG',
        'original': 'TSawyer_21-22-23_twain.mp3',
        'mtime': '1419832782',
        'size': '9625',
        'md5': '45f080ab04d1e5037e635c9cb60bd837',
        'crc32': 'd01a308c',
        'sha1': '3330658d5b8a9b715ca224d92a81538320c0dcec'
      },
      '/TSawyer_21-22-23_twain_64kb.mp3': {
        'source': 'derivative',
        'creator': 'Mark Twain',
        'title': 'Chapter 21-23',
        'album': 'The Adventures of Tom Sawyer',
        'bitrate': '64',
        'length': '31:37',
        'format': '64Kbps MP3',
        'original': 'TSawyer_21-22-23_twain.mp3',
        'track': '10/17',
        'md5': '250a9667399f8a2cedf4df3d6198d855',
        'mtime': '1158692562',
        'size': '15180404',
        'crc32': 'd86141aa',
        'sha1': 'fbbede3c3041e54a6ef5fd1e35af1cb6bfc48d07',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_21-22-23_twain_esshigh.json.gz': {
        'source': 'derivative',
        'format': 'Essentia High GZ',
        'original': 'TSawyer_21-22-23_twain_esslow.json.gz',
        'mtime': '1419837147',
        'size': '1975',
        'md5': 'ee73ca0b711707df3d7a3d1c0e33f81d',
        'crc32': '4b666ef5',
        'sha1': '2c94b513828073ebddce012df4260c805bbf4d27'
      },
      '/TSawyer_21-22-23_twain_esslow.json.gz': {
        'source': 'derivative',
        'format': 'Essentia Low GZ',
        'original': 'TSawyer_21-22-23_twain.mp3',
        'mtime': '1419833973',
        'size': '42417',
        'md5': 'c39dcaca21e29232240a51cc905401ef',
        'crc32': '142f6e16',
        'sha1': '0418f6dd60ef256a31ff1f4336c2b15ab5587cbf'
      },
      '/TSawyer_21-22-23_twain_spectrogram.png': {
        'source': 'derivative',
        'format': 'Spectrogram',
        'original': 'TSawyer_21-22-23_twain.mp3',
        'mtime': '1419833152',
        'size': '288954',
        'md5': 'd28d9f1966e9e0d932a1ecc6ee80cdd6',
        'crc32': '177c0e8a',
        'sha1': 'f192f0f88a01afce6331b773d6e8b31212cd1417'
      },
      '/TSawyer_24-25_twain.afpk': {
        'source': 'derivative',
        'format': 'Columbia Peaks',
        'original': 'TSawyer_24-25_twain.mp3',
        'mtime': '1419836984',
        'size': '141632',
        'md5': '8dd2146a5ee217d5c778850cb3947350',
        'crc32': '18ac7d7d',
        'sha1': '07979c951073fd253d854375f4abeb632f97cf9d'
      },
      '/TSawyer_24-25_twain.mp3': {
        'source': 'original',
        'format': '128Kbps MP3',
        'creator': 'Mark Twain',
        'album': 'The Adventures of Tom Sawyer',
        'title': 'Chapter 24-25',
        'track': '11/17',
        'md5': '222959165349c9f38e9e30721df1b3c6',
        'mtime': '1146467495',
        'size': '14041873',
        'crc32': '8a6be677',
        'sha1': '7fd594b3e18b98c14f16052aeff9c48411ffde1a',
        'length': '877.61',
        'height': '0',
        'width': '0',
        'artist': 'Mark Twain',
        'genre': 'Speech'
      },
      '/TSawyer_24-25_twain.ogg': {
        'source': 'derivative',
        'format': 'Ogg Vorbis',
        'original': 'TSawyer_24-25_twain.mp3',
        'md5': '827c3afda7d0f40afcfee0d28050348f',
        'mtime': '1158695269',
        'size': '9113433',
        'crc32': '4c52def4',
        'sha1': 'a0b3c0ea9bc1a45325943943182f8849867616cf',
        'length': '877',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_24-25_twain.png': {
        'source': 'derivative',
        'format': 'PNG',
        'original': 'TSawyer_24-25_twain.mp3',
        'mtime': '1419832961',
        'size': '9672',
        'md5': '91debefb4db32cc3766160fbaa86ad46',
        'crc32': '14d17dc3',
        'sha1': '713bfc1a1ede09db55a85334bf1466b4d59cb856'
      },
      '/TSawyer_24-25_twain_64kb.mp3': {
        'source': 'derivative',
        'creator': 'Mark Twain',
        'title': 'Chapter 24-25',
        'album': 'The Adventures of Tom Sawyer',
        'bitrate': '64',
        'length': '14:37',
        'format': '64Kbps MP3',
        'original': 'TSawyer_24-25_twain.mp3',
        'track': '11/17',
        'md5': '80435b2c4dae98042a86f0f533efdc23',
        'mtime': '1158692463',
        'size': '7020169',
        'crc32': 'db8585a2',
        'sha1': '7ebbcf9b57ad72cbe79f87d294c26e0406aa502f',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_24-25_twain_esshigh.json.gz': {
        'source': 'derivative',
        'format': 'Essentia High GZ',
        'original': 'TSawyer_24-25_twain_esslow.json.gz',
        'mtime': '1419837137',
        'size': '1974',
        'md5': 'd7c0ef056239d229863104ddff8be7cb',
        'crc32': 'cfc1493f',
        'sha1': 'ec63ff0a5f136d6f3b4944b2517c1bec88a99d0e'
      },
      '/TSawyer_24-25_twain_esslow.json.gz': {
        'source': 'derivative',
        'format': 'Essentia Low GZ',
        'original': 'TSawyer_24-25_twain.mp3',
        'mtime': '1419835298',
        'size': '31939',
        'md5': '66c736557ef13770fc05c719b442bcbc',
        'crc32': 'a0db11aa',
        'sha1': '68d977ebda5b98d39a46e37be7665fdad387f08f'
      },
      '/TSawyer_24-25_twain_spectrogram.png': {
        'source': 'derivative',
        'format': 'Spectrogram',
        'original': 'TSawyer_24-25_twain.mp3',
        'mtime': '1419833106',
        'size': '305680',
        'md5': 'e8df629efb85a811aba590e2bd0684bd',
        'crc32': 'a71c79ff',
        'sha1': '05e2814173bfef3eff7631c9567ad92b2c7e365c'
      },
      '/TSawyer_26_twain.afpk': {
        'source': 'derivative',
        'format': 'Columbia Peaks',
        'original': 'TSawyer_26_twain.mp3',
        'mtime': '1419836948',
        'size': '145464',
        'md5': 'b47e790f8e1c5610fbbd7a1ac217e153',
        'crc32': '5b098b58',
        'sha1': 'ead31183c1e89726ad95d68d4df16140395a8eb2'
      },
      '/TSawyer_26_twain.mp3': {
        'source': 'original',
        'format': '128Kbps MP3',
        'creator': 'Mark Twain',
        'album': 'The Adventures of Tom Sawyer',
        'title': 'Chapter 26',
        'track': '12/17',
        'md5': '573a57bcf408b82a8b094c9e5d6019c0',
        'mtime': '1146467485',
        'size': '14542970',
        'crc32': 'bac5dd54',
        'sha1': 'b68920de987d7e33f5db3881a826c8af7c6987ad',
        'length': '908.93',
        'height': '0',
        'width': '0',
        'artist': 'Mark Twain',
        'genre': 'Speech'
      },
      '/TSawyer_26_twain.ogg': {
        'source': 'derivative',
        'format': 'Ogg Vorbis',
        'original': 'TSawyer_26_twain.mp3',
        'md5': '46788b32a531133d91895a92d2d679a6',
        'mtime': '1158695472',
        'size': '9717754',
        'crc32': '8ca81235',
        'sha1': '99103edb02bbb4885f20e7f315a851e37b617533',
        'length': '908.31',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_26_twain.png': {
        'source': 'derivative',
        'format': 'PNG',
        'original': 'TSawyer_26_twain.mp3',
        'mtime': '1419832903',
        'size': '9558',
        'md5': '4cb8bce6f7cbd4da7c96ab70e994f9f9',
        'crc32': 'fc0704e1',
        'sha1': 'd731317d65298b05e9fa49c8f945a10acb2ff204'
      },
      '/TSawyer_26_twain_64kb.mp3': {
        'source': 'derivative',
        'creator': 'Mark Twain',
        'title': 'Chapter 26',
        'album': 'The Adventures of Tom Sawyer',
        'bitrate': '64',
        'length': '15:08',
        'format': '64Kbps MP3',
        'original': 'TSawyer_26_twain.mp3',
        'track': '12/17',
        'md5': '914441b5f329bb13f6208a1ba8bced7e',
        'mtime': '1158692780',
        'size': '7270736',
        'crc32': '30ea2772',
        'sha1': '0f942d91ffd7bfdbce236d04caf8fdb7e770718c',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_26_twain_esshigh.json.gz': {
        'source': 'derivative',
        'format': 'Essentia High GZ',
        'original': 'TSawyer_26_twain_esslow.json.gz',
        'mtime': '1419837122',
        'size': '1971',
        'md5': '3edbca77ff8a6d93bdbdc1f3161cf664',
        'crc32': 'aa0ac175',
        'sha1': '22f8511836324e84887a2d76a10aa06dd9501d0d'
      },
      '/TSawyer_26_twain_esslow.json.gz': {
        'source': 'derivative',
        'format': 'Essentia Low GZ',
        'original': 'TSawyer_26_twain.mp3',
        'mtime': '1419835194',
        'size': '32383',
        'md5': 'bacab9c7a8a8ffb8cca65ad03bac04d2',
        'crc32': '30767938',
        'sha1': 'd5e88dfbfa3f8bddc57b6aa124fb6dd3578dfa28'
      },
      '/TSawyer_26_twain_spectrogram.png': {
        'source': 'derivative',
        'format': 'Spectrogram',
        'original': 'TSawyer_26_twain.mp3',
        'mtime': '1419833262',
        'size': '300742',
        'md5': '7effa21e506500ef53a05a62422fb85c',
        'crc32': '173f92f8',
        'sha1': '391ab53b6d37e980d2cba980382e3e079eef8c40'
      },
      '/TSawyer_27-28_twain.afpk': {
        'source': 'derivative',
        'format': 'Columbia Peaks',
        'original': 'TSawyer_27-28_twain.mp3',
        'mtime': '1419837100',
        'size': '111824',
        'md5': '81c8e7711ba7066bc42255c136d55694',
        'crc32': 'c9aa9239',
        'sha1': '53b480be4676920427b9ca794a47c606e8feefa7'
      },
      '/TSawyer_27-28_twain.mp3': {
        'source': 'original',
        'format': '128Kbps MP3',
        'creator': 'Mark Twain',
        'album': 'The Adventures of Tom Sawyer',
        'title': 'Chapter 27-28',
        'track': '13/17',
        'md5': '3d1daba6f3ac0dbd722f05b53fd80326',
        'mtime': '1146467461',
        'size': '11002474',
        'crc32': 'bc7e7ae1',
        'sha1': '27a2934604cf6ed0ff08b2a561091a9640e7722f',
        'length': '687.65',
        'height': '0',
        'width': '0',
        'artist': 'Mark Twain',
        'genre': 'Speech'
      },
      '/TSawyer_27-28_twain.ogg': {
        'source': 'derivative',
        'format': 'Ogg Vorbis',
        'original': 'TSawyer_27-28_twain.mp3',
        'md5': 'e77b36738be0dbf020084c9ab4af8f01',
        'mtime': '1158693921',
        'size': '7213284',
        'crc32': '6302931f',
        'sha1': 'e09f050821d74fcd0cee828fc917dec61c1edbc1',
        'length': '687.02',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_27-28_twain.png': {
        'source': 'derivative',
        'format': 'PNG',
        'original': 'TSawyer_27-28_twain.mp3',
        'mtime': '1419832149',
        'size': '9923',
        'md5': 'afc281115ee8e0a3e8221b04171968d6',
        'crc32': '39c6023f',
        'sha1': 'c94e10498d42ff65ca032e7d2dc03b191e846f2c'
      },
      '/TSawyer_27-28_twain_64kb.mp3': {
        'source': 'derivative',
        'creator': 'Mark Twain',
        'title': 'Chapter 27-28',
        'album': 'The Adventures of Tom Sawyer',
        'bitrate': '64',
        'length': '11:27',
        'format': '64Kbps MP3',
        'original': 'TSawyer_27-28_twain.mp3',
        'track': '13/17',
        'md5': 'e5dcaa71205659f3f30799c3fc55c5e9',
        'mtime': '1158692818',
        'size': '5500469',
        'crc32': '59bb88c0',
        'sha1': '0799234878fa3d0c8450f9c0907065ffb6e58a3a',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_27-28_twain_esshigh.json.gz': {
        'source': 'derivative',
        'format': 'Essentia High GZ',
        'original': 'TSawyer_27-28_twain_esslow.json.gz',
        'mtime': '1419837117',
        'size': '1981',
        'md5': '6625cb5496f620e640572abcd623d320',
        'crc32': '0eddca2e',
        'sha1': 'c2318fd1d0a5d89df1c1ce14b60a0a6c6443db56'
      },
      '/TSawyer_27-28_twain_esslow.json.gz': {
        'source': 'derivative',
        'format': 'Essentia Low GZ',
        'original': 'TSawyer_27-28_twain.mp3',
        'mtime': '1419834920',
        'size': '30417',
        'md5': '1c5ab0e16a0456e2611c6f04341369a4',
        'crc32': 'f0f4b131',
        'sha1': 'e333841a9439dc4949ee45564553258e65f31e48'
      },
      '/TSawyer_27-28_twain_spectrogram.png': {
        'source': 'derivative',
        'format': 'Spectrogram',
        'original': 'TSawyer_27-28_twain.mp3',
        'mtime': '1419833220',
        'size': '307639',
        'md5': '72be0ca1823e23243df8cefb30eb3c41',
        'crc32': '1e524130',
        'sha1': '8eda5875f97b9cd3ad614683f0b1707f7864b4cf'
      },
      '/TSawyer_29_twain.afpk': {
        'source': 'derivative',
        'format': 'Columbia Peaks',
        'original': 'TSawyer_29_twain.mp3',
        'mtime': '1419837073',
        'size': '143168',
        'md5': '7bcd25c7105609291b9bbe798182af0e',
        'crc32': '92c9ffa6',
        'sha1': 'f63d882f3664c619b70285c183f23eef1ec31f67'
      },
      '/TSawyer_29_twain.mp3': {
        'source': 'original',
        'format': '128Kbps MP3',
        'creator': 'Mark Twain',
        'album': 'The Adventures of Tom Sawyer',
        'title': 'Chapter 29',
        'track': '14/17',
        'md5': 'f12cb17b375e70507a8a0fdb1fc36e6c',
        'mtime': '1146467453',
        'size': '14193557',
        'crc32': '5ac8491e',
        'sha1': '36b690d143b24182bce9f63086da820957232eaa',
        'length': '887.09',
        'height': '0',
        'width': '0',
        'artist': 'Mark Twain',
        'genre': 'Speech'
      },
      '/TSawyer_29_twain.ogg': {
        'source': 'derivative',
        'format': 'Ogg Vorbis',
        'original': 'TSawyer_29_twain.mp3',
        'md5': '8f9da2de473f4aed1e426582161aa608',
        'mtime': '1158693983',
        'size': '9349715',
        'crc32': '1dd9eaea',
        'sha1': '66576435114886ada860631086d2017882e75456',
        'length': '886.49',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_29_twain.png': {
        'source': 'derivative',
        'format': 'PNG',
        'original': 'TSawyer_29_twain.mp3',
        'mtime': '1419832180',
        'size': '9322',
        'md5': '06b056c776d4eae3e1e696cd528fbe50',
        'crc32': '090d4903',
        'sha1': 'f8993337545f721eefd77ce79e812c2e94845e97'
      },
      '/TSawyer_29_twain_64kb.mp3': {
        'source': 'derivative',
        'creator': 'Mark Twain',
        'title': 'Chapter 29',
        'album': 'The Adventures of Tom Sawyer',
        'bitrate': '64',
        'length': '14:46',
        'format': '64Kbps MP3',
        'original': 'TSawyer_29_twain.mp3',
        'track': '14/17',
        'md5': '3d2bdd0e788f5919319d44c0087cb480',
        'mtime': '1158693104',
        'size': '7096029',
        'crc32': '52131e5c',
        'sha1': '611bd4c0f2a93dc8b83e46e46861b57df1486fa9',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_29_twain_esshigh.json.gz': {
        'source': 'derivative',
        'format': 'Essentia High GZ',
        'original': 'TSawyer_29_twain_esslow.json.gz',
        'mtime': '1419837112',
        'size': '1984',
        'md5': '6eb444a221434c25ace58a929ab5e2d1',
        'crc32': '293f8212',
        'sha1': 'c0fb3fdb30163458226fba217d2f591ab84f378e'
      },
      '/TSawyer_29_twain_esslow.json.gz': {
        'source': 'derivative',
        'format': 'Essentia Low GZ',
        'original': 'TSawyer_29_twain.mp3',
        'mtime': '1419835638',
        'size': '32721',
        'md5': 'c12b65ff180e6a56be788d92ab415971',
        'crc32': '5ed2291c',
        'sha1': '94560f2a164adf9693ab1f1013db40cf0cc2573d'
      },
      '/TSawyer_29_twain_spectrogram.png': {
        'source': 'derivative',
        'format': 'Spectrogram',
        'original': 'TSawyer_29_twain.mp3',
        'mtime': '1419833043',
        'size': '303126',
        'md5': '4cc5bcb9a372b917a19906127572521b',
        'crc32': '9bdd0ab2',
        'sha1': 'b7728eb6b08be32c230bd739494aa557b850539e'
      },
      '/TSawyer_30_twain.afpk': {
        'source': 'derivative',
        'format': 'Columbia Peaks',
        'original': 'TSawyer_30_twain.mp3',
        'mtime': '1419836404',
        'size': '160800',
        'md5': 'a5880f7be4725d8c9a81281d4ecc8ac3',
        'crc32': '07413b1f',
        'sha1': '92066f01033e1c1d21de0f2a166225be4c6b480c'
      },
      '/TSawyer_30_twain.mp3': {
        'source': 'original',
        'format': '128Kbps MP3',
        'creator': 'Mark Twain',
        'album': 'The Adventures of Tom Sawyer',
        'title': 'Chapter 30',
        'track': '15/17',
        'md5': '6f248818b2cce84ea07c8ea00c3e3210',
        'mtime': '1146467421',
        'size': '16313059',
        'crc32': 'fff9fa7b',
        'sha1': 'd880d211fe680f7fba39e7e2d1db5e7e5579da8f',
        'length': '1019.56',
        'height': '0',
        'width': '0',
        'artist': 'Mark Twain',
        'genre': 'Speech'
      },
      '/TSawyer_30_twain.ogg': {
        'source': 'derivative',
        'format': 'Ogg Vorbis',
        'original': 'TSawyer_30_twain.mp3',
        'md5': '7d02e71f15b8d6934b489949d8b1d514',
        'mtime': '1158694316',
        'size': '10575453',
        'crc32': 'd287833f',
        'sha1': '4bd97acfe00eaaf50feb4c32ac139c4821f95277',
        'length': '1018.92',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_30_twain.png': {
        'source': 'derivative',
        'format': 'PNG',
        'original': 'TSawyer_30_twain.mp3',
        'mtime': '1419832199',
        'size': '9069',
        'md5': 'e53dd0048c3cf4193aa0acae24c5918d',
        'crc32': '2c033ece',
        'sha1': '4bb118d6a14a6b9dee2446707995bf7539ae802c'
      },
      '/TSawyer_30_twain_64kb.mp3': {
        'source': 'derivative',
        'creator': 'Mark Twain',
        'title': 'Chapter 30',
        'album': 'The Adventures of Tom Sawyer',
        'bitrate': '64',
        'length': '16:59',
        'format': '64Kbps MP3',
        'original': 'TSawyer_30_twain.mp3',
        'track': '15/17',
        'md5': 'f774dfa3efeeb03a4d3d0c6344ff97e6',
        'mtime': '1158693056',
        'size': '8155764',
        'crc32': 'ddf065f6',
        'sha1': '2ebf9f56110f5ffb52458e99064f24e1e74a094b',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_30_twain_esshigh.json.gz': {
        'source': 'derivative',
        'format': 'Essentia High GZ',
        'original': 'TSawyer_30_twain_esslow.json.gz',
        'mtime': '1419837127',
        'size': '1974',
        'md5': '6f353a9ad18c8456276f51a3f3395dc5',
        'crc32': '5c5039b9',
        'sha1': 'a8ceed9393087a49bc2947a1ac833ee9e6a82116'
      },
      '/TSawyer_30_twain_esslow.json.gz': {
        'source': 'derivative',
        'format': 'Essentia Low GZ',
        'original': 'TSawyer_30_twain.mp3',
        'mtime': '1419833739',
        'size': '33662',
        'md5': '2f4d0b4933cf625522dfd9a9607f85f5',
        'crc32': 'a3ef3fc9',
        'sha1': '19f7146b264919f75dc77b31d90b2355250c3c3c'
      },
      '/TSawyer_30_twain_spectrogram.png': {
        'source': 'derivative',
        'format': 'Spectrogram',
        'original': 'TSawyer_30_twain.mp3',
        'mtime': '1419833189',
        'size': '295669',
        'md5': '25f7be37d695c18c30b672d8f677ade3',
        'crc32': '3dde8544',
        'sha1': '38807564baf12d1dd41c0a8754684faa1009f9d7'
      },
      '/TSawyer_31-32_twain.afpk': {
        'source': 'derivative',
        'format': 'Columbia Peaks',
        'original': 'TSawyer_31-32_twain.mp3',
        'mtime': '1419836270',
        'size': '210968',
        'md5': '1ba3099626e6321aab0abfb3d771311b',
        'crc32': '45e5effa',
        'sha1': '9dc499af492a20007972622ebbc7ac442c17a24f'
      },
      '/TSawyer_31-32_twain.mp3': {
        'source': 'original',
        'format': '128Kbps MP3',
        'creator': 'Mark Twain',
        'album': 'The Adventures of Tom Sawyer',
        'title': 'Chapter 31-32',
        'track': '16/17',
        'md5': '2bcaa532a1f612fe42b5c7b000418088',
        'mtime': '1146467476',
        'size': '22306598',
        'crc32': '28f905e6',
        'sha1': '5b615bb40872dec855c0cbfd688ec96d7d4ca4e9',
        'length': '1394.16',
        'height': '0',
        'width': '0',
        'artist': 'Mark Twain',
        'genre': 'Speech'
      },
      '/TSawyer_31-32_twain.ogg': {
        'source': 'derivative',
        'format': 'Ogg Vorbis',
        'original': 'TSawyer_31-32_twain.mp3',
        'md5': '9690d8324770d221ee6292c4021f8645',
        'mtime': '1158694414',
        'size': '14514894',
        'crc32': 'a0530929',
        'sha1': 'a83a05a97665ecc442c86ef2d8277fb3d7a94057',
        'length': '1393.55',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_31-32_twain.png': {
        'source': 'derivative',
        'format': 'PNG',
        'original': 'TSawyer_31-32_twain.mp3',
        'mtime': '1419832818',
        'size': '8500',
        'md5': '6caf00463a504d259b0c7148cf9183ee',
        'crc32': '3cf2b0dc',
        'sha1': '9b64ea5cb91a35c5b3d2212e6ece6967bceff61f'
      },
      '/TSawyer_31-32_twain_64kb.mp3': {
        'source': 'derivative',
        'creator': 'Mark Twain',
        'title': 'Chapter 31-32',
        'album': 'The Adventures of Tom Sawyer',
        'bitrate': '64',
        'length': '23:14',
        'format': '64Kbps MP3',
        'original': 'TSawyer_31-32_twain.mp3',
        'track': '16/17',
        'md5': '87336e6226871799fb8b6abdbdb82b0c',
        'mtime': '1158693000',
        'size': '11152531',
        'crc32': '77a6f211',
        'sha1': '842bf6946aec6ee3f0ea4e4fe29df6720b64d8ae',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_31-32_twain_esshigh.json.gz': {
        'source': 'derivative',
        'format': 'Essentia High GZ',
        'original': 'TSawyer_31-32_twain_esslow.json.gz',
        'mtime': '1419837142',
        'size': '1981',
        'md5': 'aedd6e022099a9f06c9bce2c74c6e692',
        'crc32': '40a8742a',
        'sha1': '352177151cc1693d5ae15c7b493434f1a70e5c47'
      },
      '/TSawyer_31-32_twain_esslow.json.gz': {
        'source': 'derivative',
        'format': 'Essentia Low GZ',
        'original': 'TSawyer_31-32_twain.mp3',
        'mtime': '1419835932',
        'size': '37323',
        'md5': '300458305ff2913c063728711b08a924',
        'crc32': '2055e1a3',
        'sha1': '5de1cc58dab79761e3db6e33e52e81d11f77e87b'
      },
      '/TSawyer_31-32_twain_spectrogram.png': {
        'source': 'derivative',
        'format': 'Spectrogram',
        'original': 'TSawyer_31-32_twain.mp3',
        'mtime': '1419833097',
        'size': '290735',
        'md5': '0d94ad35a97b0e931fa85ddceb60219f',
        'crc32': '2c22b6c7',
        'sha1': '1088ed043b8673bc26a22fef8990a9f88e8bbe80'
      },
      '/TSawyer_33-34-35_twain.afpk': {
        'source': 'derivative',
        'format': 'Columbia Peaks',
        'original': 'TSawyer_33-34-35_twain.mp3',
        'mtime': '1419836720',
        'size': '319880',
        'md5': 'a7050709794b1f9ee7b7ef540234c688',
        'crc32': 'c57718f5',
        'sha1': '1b4cec1634e8d24c724bc636ba09fc40a2038e1d'
      },
      '/TSawyer_33-34-35_twain.mp3': {
        'source': 'original',
        'format': '128Kbps MP3',
        'creator': 'Mark Twain',
        'album': 'The Adventures of Tom Sawyer',
        'title': 'Chapter 33-35',
        'track': '17/17',
        'md5': 'b9ec97d14f9be14e09a5d753cdc78b42',
        'mtime': '1146467443',
        'size': '32429155',
        'crc32': 'cceea2f3',
        'sha1': '99d1dba4bce474978af870ebc08131985da04662',
        'length': '2026.82',
        'height': '0',
        'width': '0',
        'artist': 'Mark Twain',
        'genre': 'Speech'
      },
      '/TSawyer_33-34-35_twain.ogg': {
        'source': 'derivative',
        'format': 'Ogg Vorbis',
        'original': 'TSawyer_33-34-35_twain.mp3',
        'md5': 'a5fafd5cefaeba4701218ff9befadb7c',
        'mtime': '1158694125',
        'size': '21241705',
        'crc32': '35f7ed10',
        'sha1': '24b377aaa74b7114278fc67816c2875449b4c0ac',
        'length': '2026.2',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_33-34-35_twain.png': {
        'source': 'derivative',
        'format': 'PNG',
        'original': 'TSawyer_33-34-35_twain.mp3',
        'mtime': '1419832637',
        'size': '9467',
        'md5': '5955afe7c611807e4b7590b429549ac0',
        'crc32': 'ddcedf39',
        'sha1': '1b12beb5a6ace1e9ba237478dfa66de99b9a167a'
      },
      '/TSawyer_33-34-35_twain_64kb.mp3': {
        'source': 'derivative',
        'creator': 'Mark Twain',
        'title': 'Chapter 33-35',
        'album': 'The Adventures of Tom Sawyer',
        'bitrate': '64',
        'length': '33:46',
        'format': '64Kbps MP3',
        'original': 'TSawyer_33-34-35_twain.mp3',
        'track': '17/17',
        'md5': 'b0f4c9a7709af978f4b5a67524f1b317',
        'mtime': '1158692923',
        'size': '16213808',
        'crc32': '79064e21',
        'sha1': '1e7039e8bc3dd8cd82ccd5d3358f58e7aa7bee4e',
        'height': '0',
        'width': '0'
      },
      '/TSawyer_33-34-35_twain_esshigh.json.gz': {
        'source': 'derivative',
        'format': 'Essentia High GZ',
        'original': 'TSawyer_33-34-35_twain_esslow.json.gz',
        'mtime': '1419837132',
        'size': '1967',
        'md5': '51130cc5461f2419d72ed803737139fc',
        'crc32': 'e3d343ec',
        'sha1': '737a47b1eae3141fdb7757e7eef9f2958f66144b'
      },
      '/TSawyer_33-34-35_twain_esslow.json.gz': {
        'source': 'derivative',
        'format': 'Essentia Low GZ',
        'original': 'TSawyer_33-34-35_twain.mp3',
        'mtime': '1419835533',
        'size': '44127',
        'md5': 'c7db038d10b5bbd63cbe6c3f4dee9436',
        'crc32': '988a3e74',
        'sha1': 'c626f2789170dc1f545a8ea832a9151566a04acb'
      },
      '/TSawyer_33-34-35_twain_spectrogram.png': {
        'source': 'derivative',
        'format': 'Spectrogram',
        'original': 'TSawyer_33-34-35_twain.mp3',
        'mtime': '1419833251',
        'size': '292488',
        'md5': 'c27bcd668681cacbea8e54e4747a8ec1',
        'crc32': 'c5aaeea8',
        'sha1': 'd6911a768351c4b392b094186282a2dabc9fc2bb'
      },
      '/tom_sawyer2.djvu': {
        'source': 'derivative',
        'format': 'DjVu',
        'original': 'tom_sawyer2_djvu.xml',
        'mtime': '1419836297',
        'size': '269162',
        'md5': '1e74892fd66ffe8a3749a2e573e9ba44',
        'crc32': '63a4415a',
        'sha1': 'dc27c6efcb3952860f025c5d7bd7f287039fd42c'
      },
      '/tom_sawyer2.jpg': {
        'source': 'original',
        'format': 'JPEG',
        'mtime': '1371517071',
        'size': '75236',
        'md5': '8c94758080cb0241ef23ae66a005ec0c',
        'crc32': '1ee50efd',
        'sha1': '41b737259dc218eb4c34cc43937ba60fe2e8dddc',
        'rotation': '0'
      },
      '/tom_sawyer2.pdf': {
        'source': 'original',
        'format': 'Text PDF',
        'mtime': '1379967728',
        'size': '1964883',
        'md5': 'e4ad38614193b7486f48eb928edf13fe',
        'crc32': '8bdd75cb',
        'sha1': 'fa3fbaada64a3c34e9a02b9ac4d893a24b427ac0'
      },
      '/tom_sawyer2_abbyy.gz': {
        'source': 'derivative',
        'format': 'Abbyy GZ',
        'original': 'tom_sawyer2_jp2.zip',
        'mtime': '1414335356',
        'size': '32842',
        'md5': '3fa1ddc0292f73e66aaf0e35a82abac3',
        'crc32': 'd08852cc',
        'sha1': '62eb77cb1bae7ad40b6cb42f8d4f71def4fcb044'
      },
      '/tom_sawyer2_djvu.txt': {
        'source': 'derivative',
        'format': 'DjVuTXT',
        'original': 'tom_sawyer2.djvu',
        'mtime': '1419837107',
        'size': '2404',
        'md5': 'f1aaa8eea05ca3e6fd08120d01779974',
        'crc32': '75a4c7d6',
        'sha1': '704deef388116b5a00938194874571d7db1aac53'
      },
      '/tom_sawyer2_djvu.xml': {
        'source': 'derivative',
        'format': 'Djvu XML',
        'original': 'tom_sawyer2_abbyy.gz',
        'mtime': '1414335363',
        'size': '23780',
        'md5': '5d780638d6ea974b7c2ba0a9585e5ad0',
        'crc32': 'f513d247',
        'sha1': '6db23344401e07d5a2aa978256c9265085cdd3e3'
      },
      '/tom_sawyer2_jp2.zip': {
        'source': 'derivative',
        'format': 'Single Page Processed JP2 ZIP',
        'original': 'tom_sawyer2.pdf',
        'mtime': '1414335269',
        'size': '1978867',
        'md5': '90ccb737e9ea6bf970e91fb207390f89',
        'crc32': 'c1e31ee8',
        'sha1': 'e4716d0f39362868caf8d1d2efaf5c92abae7172'
      },
      '/tom_sawyer2_scandata.xml': {
        'source': 'derivative',
        'format': 'Scandata',
        'original': 'tom_sawyer2_djvu.xml',
        'mtime': '1419836271',
        'size': '1125',
        'md5': '7c179d60aa793f26b212ceba07b95e4c',
        'crc32': '28532427',
        'sha1': 'b3131d18c8e4819f186fa4fabc641707371ae01d'
      },
      '/tom_sawyer2_thumb.jpg': {
        'source': 'original',
        'format': 'JPEG Thumb',
        'mtime': '1379967731',
        'size': '20007',
        'md5': 'c402aebbe94b1872b5eaeaba6d6a6f79',
        'crc32': '9ff1b867',
        'sha1': '8ea590d6a7f217bb01f3a20279a4d95fd1ce737c',
        'rotation': '0'
      },
      '/tom_sawyer_librivox.json': {
        'source': 'original',
        'mtime': '1316144788',
        'size': '17793',
        'md5': 'f7b83dc2684e0fae511e068a1a6ddc89',
        'crc32': '7ab71366',
        'sha1': 'f6a0a01d0d922ca158d8385df0fd1a566123eb4d',
        'format': 'Unknown'
      },
      '/tom_sawyer_librivox_128kb.m3u': {
        'source': 'derivative',
        'format': '128kbps M3U',
        'original': 'TSawyer_31-32_twain.mp3',
        'md5': '7aa5d03fcee8b9fde9f658fcaf329edf',
        'mtime': '1158695475',
        'size': '1295',
        'crc32': 'a7b1f14a',
        'sha1': '3631ebbc405db74a4b53f8613bff4d8632059408'
      },
      '/tom_sawyer_librivox_64kb.m3u': {
        'source': 'derivative',
        'format': '64Kbps M3U',
        'original': 'TSawyer_31-32_twain_64kb.mp3',
        'md5': '3b4ed8fa01ef3ec9c102a65a945d943e',
        'mtime': '1158695537',
        'size': '1380',
        'crc32': '89178147',
        'sha1': '01c6e3eb27de762b262890fa6ee23e7894f7e85f'
      },
      '/tom_sawyer_librivox_64kb_mp3.zip': {
        'source': 'derivative',
        'format': '64Kbps MP3 ZIP',
        'original': 'TSawyer_31-32_twain_64kb.mp3',
        'md5': '1550711a904d0bac9f3e160dc260f77a',
        'mtime': '1158695482',
        'size': '195068223',
        'crc32': '3d68b17b',
        'sha1': '5feafb3d999407bdd1a98b0e31c3b11d85b01bac',
        'length': '24383.52',
        'height': '0',
        'width': '0'
      },
      '/tom_sawyer_librivox_archive.torrent': {
        'source': 'original',
        'btih': 'c7b5d03b382f919c9e746d7f28147a8a1ce0dbcb',
        'mtime': '1509207839',
        'size': '50311',
        'md5': 'd674f05ceabe216ef0ee2a181ff0ace7',
        'crc32': 'dcd4e2b9',
        'sha1': '12f4fc19235e9bccaaeaf142654a82667fbce4b4',
        'format': 'Archive BitTorrent'
      },
      '/tom_sawyer_librivox_files.xml': {
        'source': 'original',
        'format': 'Metadata',
        'md5': '760e8ff3ded22befddf1e2007666f743'
      },
      '/tom_sawyer_librivox_files_all.torrent': {
        'source': 'derivative',
        'format': 'ItemBitTorrent',
        'original': 'tom_sawyer_librivox_files.xml',
        'mtime': '1316144798',
        'size': '13381',
        'md5': '4ab3786a3bef8e8cf57a89c80ea07856',
        'crc32': '3b62730c',
        'sha1': '1c169fadcb48de2f57aad1cbdd5a4bcda6a3dff2'
      },
      '/tom_sawyer_librivox_meta.xml': {
        'source': 'original',
        'format': 'Metadata',
        'mtime': '1482870252',
        'size': '3535',
        'md5': '8e56c8e682e18ed5a32789c00c90f9ef',
        'crc32': '576dc7f9',
        'sha1': 'b3eeffe32aba54fc924a4a0fe964007d009efa55'
      },
      '/tom_sawyer_librivox_reviews.xml': {
        'source': 'original',
        'format': 'Metadata',
        'mtime': '1509207825',
        'size': '6845',
        'md5': '0f179269a26a01c641dfc437c074c525',
        'crc32': 'fe877451',
        'sha1': '85f80ef8bb37fab76f86b1a48ccd1880190b0861'
      }
    },
    'misc': {
      'image': 'https://ia802607.us.archive.org/31/items/tom_sawyer_librivox/tom_sawyer2_thumb.jpg',
    }
};
