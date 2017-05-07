/* eslint-env mocha */
/* eslint-disable max-nested-callbacks */

'use strict'

const { assert } = require('chai')
const Hoopy = require('.')

test('interface is correct', () => {
  assert.isFunction(Hoopy)
  assert.lengthOf(Hoopy, 1)
  assert.throws(() => new Hoopy(0))
  assert.doesNotThrow(() => new Hoopy(1))
  assert.throws(() => new Hoopy(-1))
})

suite('instantiate, size=1:', () => {
  let hoopy

  setup(() => {
    hoopy = new Hoopy(1)
  })

  test('instance is array', () => {
    assert.isTrue(Array.isArray(hoopy))
  })

  test('length is correct', () => {
    assert.equal(hoopy.length, 1)
  })

  test('[0] is undefined', () => {
    assert.isUndefined(hoopy[0])
  })

  test('[1] is undefined', () => {
    assert.isUndefined(hoopy[1])
  })

  test('[-1] is undefined', () => {
    assert.isUndefined(hoopy[-1])
  })

  test('grow method is implemented', () => {
    assert.isFunction(hoopy.grow)
    assert.lengthOf(hoopy.grow, 1)
  })

  test('grow throws if by=0', () => {
    assert.throws(() => hoopy.grow(0))
  })

  suite('assign to [0]:', () => {
    setup(() => {
      hoopy[0] = 'foo'
    })

    test('[0] is set correctly', () => {
      assert.equal(hoopy[0], 'foo')
    })

    test('[1] is set correctly', () => {
      assert.equal(hoopy[1], 'foo')
    })

    test('[-1] is set correctly', () => {
      assert.equal(hoopy[-1], 'foo')
    })

    suite('assign to [1]:', () => {
      setup(() => {
        hoopy[1] = 'bar'
      })

      test('[0] is set correctly', () => {
        assert.equal(hoopy[0], 'bar')
      })

      test('[1] is set correctly', () => {
        assert.equal(hoopy[1], 'bar')
      })

      test('[-1] is set correctly', () => {
        assert.equal(hoopy[-1], 'bar')
      })
    })

    suite('grow, by=1:', () => {
      setup(() => {
        hoopy.grow(1)
      })

      test('length is correct', () => {
        assert.equal(hoopy.length, 2)
      })

      test('[0] is set correctly', () => {
        assert.equal(hoopy[0], 'foo')
      })

      test('[1] is undefined', () => {
        assert.isUndefined(hoopy[1])
      })

      test('[-1] is undefined', () => {
        assert.isUndefined(hoopy[-1])
      })
    })
  })
})

suite('instantiate, size=2:', () => {
  let hoopy

  setup(() => {
    hoopy = new Hoopy(2)
  })

  test('length is correct', () => {
    assert.equal(hoopy.length, 2)
  })

  suite('assign to [0]:', () => {
    setup(() => {
      hoopy[0] = 'foo'
    })

    test('[0] is set correctly', () => {
      assert.equal(hoopy[0], 'foo')
    })

    test('[1] is undefined', () => {
      assert.isUndefined(hoopy[1])
    })

    test('[2] is set correctly', () => {
      assert.equal(hoopy[2], 'foo')
    })

    test('[3] is undefined', () => {
      assert.isUndefined(hoopy[3])
    })

    test('[-1] is undefined', () => {
      assert.isUndefined(hoopy[-1])
    })

    suite('assign to [1]:', () => {
      setup(() => {
        hoopy[1] = 'bar'
      })

      test('[0] is set correctly', () => {
        assert.equal(hoopy[0], 'foo')
      })

      test('[1] is set correctly', () => {
        assert.equal(hoopy[1], 'bar')
      })

      test('[2] is set correctly', () => {
        assert.equal(hoopy[2], 'foo')
      })

      test('[-1] is set correctly', () => {
        assert.equal(hoopy[-1], 'bar')
      })

      suite('assign to [2]:', () => {
        setup(() => {
          hoopy[2] = 'baz'
        })

        test('[0] is set correctly', () => {
          assert.equal(hoopy[0], 'baz')
        })

        test('[1] is set correctly', () => {
          assert.equal(hoopy[1], 'bar')
        })

        test('[2] is set correctly', () => {
          assert.equal(hoopy[2], 'baz')
        })

        test('[-1] is set correctly', () => {
          assert.equal(hoopy[-1], 'bar')
        })

        suite('grow, by=1:', () => {
          setup(() => {
            hoopy.grow(1)
          })

          test('length is correct', () => {
            assert.equal(hoopy.length, 3)
          })

          test('[0] is undefined', () => {
            assert.isUndefined(hoopy[0])
          })

          test('[1] is set correctly', () => {
            assert.equal(hoopy[1], 'bar')
          })

          test('[2] is set correctly', () => {
            assert.equal(hoopy[2], 'baz')
          })

          test('[3] is undefined', () => {
            assert.isUndefined(hoopy[3])
          })
        })

        suite('grow, by=2:', () => {
          setup(() => {
            hoopy.grow(2)
          })

          test('length is correct', () => {
            assert.equal(hoopy.length, 4)
          })

          test('[0] is undefined', () => {
            assert.isUndefined(hoopy[0])
          })

          test('[1] is set correctly', () => {
            assert.equal(hoopy[1], 'bar')
          })

          test('[2] is set correctly', () => {
            assert.equal(hoopy[2], 'baz')
          })

          test('[3] is undefined', () => {
            assert.isUndefined(hoopy[3])
          })

          test('[4] is undefined', () => {
            assert.isUndefined(hoopy[4])
          })

          test('[5] is set correctly', () => {
            assert.equal(hoopy[5], 'bar')
          })
        })
      })
    })
  })
})

