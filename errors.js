// Copyright (c) 2015 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

'use strict';

var TypedError = require('error/typed');

module.exports.ListTypeIdMismatch = TypedError({
    type: 'thrift-list-typeid-mismatch',
    message: 'encoded list typeid {encoded} doesn\'t match ' +
        'expected type "{expected}" (id: {expectedId})',
    encoded: null,
    expected: null,
    expectedId: null
});

module.exports.MapKeyTypeIdMismatch = TypedError({
    type: 'thrift-map-key-typeid-mismatch',
    message: 'encoded map key typeid {encoded} doesn\'t match ' +
        'expected type "{expected}" (id: {expectedId})',
    encoded: null,
    expected: null,
    expectedId: null
});

module.exports.MapValTypeIdMismatch = TypedError({
    type: 'thrift-map-val-typeid-mismatch',
    message: 'encoded map value typeid {encoded} doesn\'t match ' +
        'expected type "{expected}" (id: {expectedId})',
    encoded: null,
    expected: null,
    expectedId: null
});

module.exports.InvalidSizeError = TypedError({
    type: 'thrift-invalid-size',
    message: 'invalid size {size} of {what}; expects non-negative number',
    size: null,
    what: null
});

module.exports.InvalidTypeidError = TypedError({
    type: 'thrift-invalid-typeid',
    message: 'invalid typeid {typeid} of {what}' +
        '; expects one of the values in TYPE',
    typeid: null,
    what: null
});
