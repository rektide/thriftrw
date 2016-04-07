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

// Copyright (c) 2015 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of self software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and self permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/* eslint max-params:[1, 10] */
'use strict';

var none = {};

module.exports.Program = Program;
function Program(headers, definitions) {
    this.headers = headers;
    this.definitions = definitions;
}
Program.prototype.type = 'Program';

module.exports.Identifier = Identifier;
function Identifier(name, line, column) {
    this.name = name;
    this.line = line;
    this.column = column;
    this.as = null;
}
Identifier.prototype.type = 'Identifier';

module.exports.Include = Include;
function Include(id, namespace, line, column) {
    this.id = id;
    this.namespace = namespace;
    this.line = line;
    this.column = column;
}
Include.prototype.type = 'Include';

module.exports.Namespace = Namespace;
function Namespace(id, scope) {
    this.id = id;
    this.scope = scope;
}
Namespace.prototype.type = 'Namespace';

module.exports.Typedef = Typedef;
function Typedef(type, id, annotations) {
    this.valueType = type;
    this.id = id;
    this.annotations = annotations || none;
}
Typedef.prototype.type = 'Typedef';

module.exports.BaseType = BaseType;
function BaseType(type, annotations) {
    this.baseType = type;
    this.annotations = annotations || none;
}
BaseType.prototype.type = 'BaseType';

module.exports.Enum = Enum;
function Enum(id, definitions, annotations) {
    this.id = id;
    this.definitions = definitions;
    this.annotations = annotations || none;
}
Enum.prototype.type = 'Enum';

module.exports.EnumDefinition = EnumDefinition;
function EnumDefinition(id, value, annotations) {
    this.id = id;
    this.value = value;
    this.annotations = annotations || none;
}
EnumDefinition.prototype.fieldType = new BaseType('i32');
EnumDefinition.prototype.type = 'EnumDefinition';

module.exports.Senum = Senum;
function Senum(id, definitions, annotations) {
    this.id = id;
    this.senumDefinitions = definitions;
    this.annotations = annotations || none;
}
Senum.prototype.type = 'Senum';

module.exports.Const = Const;
function Const(id, fieldType, value) {
    this.id = id;
    this.fieldType = fieldType;
    this.value = value;
}
Const.prototype.type = 'Const';

module.exports.ConstList = ConstList;
function ConstList(values) {
    this.values = values;
}
ConstList.prototype.type = 'ConstList';

module.exports.ConstMap = ConstMap;
function ConstMap(entries) {
    this.entries = entries;
}
ConstMap.prototype.type = 'ConstMap';

module.exports.ConstEntry = ConstEntry;
function ConstEntry(key, value) {
    this.key = key;
    this.value = value;
}
ConstEntry.prototype.type = 'ConstEntry';

module.exports.Struct = Struct;
function Struct(id, fields, annotations) {
    this.id = id;
    this.fields = fields;
    this.isArgument = false;
    this.isResult = false;
    this.annotations = annotations || none;
}
Struct.prototype.type = 'Struct';

module.exports.Union = Union;
function Union(id, fields, annotations) {
    this.id = id;
    this.fields = fields;
    this.annotations = annotations || none;
}
Union.prototype.type = 'Union';

module.exports.Exception = Exception;
function Exception(id, fields, annotations) {
    this.id = id;
    this.fields = fields;
    this.annotations = annotations || none;
}
Exception.prototype.type = 'Exception';

module.exports.Service = Service;
function Service(id, functions, annotations, baseService) {
    this.id = id;
    this.functions = functions;
    this.baseService = baseService;
    this.annotations = annotations || none;
}
Service.prototype.type = 'Service';

module.exports.FunctionDefinition = FunctionDefinition;
function FunctionDefinition(id, fields, ft, _throws, annotations, oneway) {
    this.id = id;
    this.returns = ft;
    this.fields = fields;
    this.fields.isArgument = true;
    this.throws = _throws;
    this.oneway = oneway;
    this.annotations = annotations || none;
}
FunctionDefinition.prototype.type = 'function';

module.exports.Field = Field;
function Field(id, ft, name, req, fv, annotations) {
    this.id = id;
    this.name = name;
    this.valueType = ft;
    this.required = req === 'required';
    this.optional = req === 'optional';
    this.defaultValue = fv;
    this.annotations = annotations || none;
}
Field.prototype.type = 'Field';

module.exports.FieldIdentifier = FieldIdentifier;
function FieldIdentifier(value, line, column) {
    this.value = value;
    this.line = line;
    this.column = column;
}
FieldIdentifier.prototype.type = 'FieldIdentifier';

module.exports.MapType = MapType;
function MapType(keyType, valueType, annotations) {
    this.keyType = keyType;
    this.valueType = valueType;
    this.annotations = annotations || none;
}
MapType.prototype.type = 'Map';

module.exports.SetType = SetType;
function SetType(valueType, annotations) {
    this.valueType = valueType;
    this.annotations = annotations || none;
}
SetType.prototype.type = 'Set';

module.exports.ListType = ListType;
function ListType(valueType, annotations) {
    this.valueType = valueType;
    this.annotations = annotations || none;
}
ListType.prototype.type = 'List';

module.exports.TypeAnnotation = TypeAnnotation;
function TypeAnnotation(name, value) {
    this.name = name;
    this.value = value;
}
TypeAnnotation.prototype.type = 'TypeAnnotation';

module.exports.Comment = Comment;
function Comment(value) {
    this.value = value;
}
Comment.prototype.type = 'Comment';

module.exports.Literal = Literal;
function Literal(value) {
    this.value = value;
}
Literal.prototype.type = 'Literal';

