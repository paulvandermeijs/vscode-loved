const Color = require('color');
const colors = require('./colors');

module.exports = {
    'name': 'Loved',
    'type': 'dark',
    'colors': {
        'focusBorder': colors.transparent,
        'foreground': colors.foreground,
        'widget.shadow': colors.transparent,
        'selection.background': Color(colors.highlight).alpha(0.14).hexa(),

        'button.background': colors.blue,

        "menu.background": colors.editorBackground,
        "menu.separatorBackground": '#0c111a',

        'dropdown.background': Color(colors.highlight).alpha(0.03).hexa(),
        'dropdown.border': Color(colors.black).alpha(0.267).hexa(),
        'dropdown.listBackground': colors.background,

        'input.background': Color(colors.highlight).alpha(0.03).hexa(),
        'input.border': colors.transparent,

        'scrollbar.shadow': colors.transparent,
        'scrollbarSlider.background': Color(colors.highlight).alpha(0.03).hexa(),
        'scrollbarSlider.activeBackground': Color(colors.highlight).alpha(0.063).hexa(),
        'scrollbarSlider.hoverBackground': Color(colors.highlight).alpha(0.086).hexa(),

        'badge.background': '#0c111a',

        'list.activeSelectionBackground': Color(colors.highlight).alpha(0.063).hexa(),
        'list.hoverBackground': Color(colors.highlight).alpha(0.086).hexa(),
        'list.focusBackground': Color(colors.highlight).alpha(0.086).hexa(),
        'list.highlightForeground': '#d5dae2',
        'list.inactiveSelectionBackground': Color(colors.highlight).alpha(0.03).hexa(),
        'list.warningForeground': colors.warning,
        'list.errorForeground': colors.error,

        'activityBar.background': colors.background,

        'activityBarBadge.background': colors.background,

        'sideBar.background': colors.background,
        'sideBarTitle.foreground': '#d5dae2',
        'sideBarSectionHeader.background': colors.transparent,

        'editorGroup.dropBackground': Color(colors.highlight).alpha(0.03).hexa(),
        'editorGroupHeader.tabsBackground': colors.background,
        'editorGroup.border': colors.background,
        'editorGroupHeader.tabsBorder': colors.transparent,

        'tab.activeForeground': '#d5dae2',
        'tab.activeBorder': colors.transparent,
        'tab.inactiveBackground': colors.background,
        'tab.inactiveForeground': Color(colors.foreground).alpha(0.5).hexa(),
        'tab.border': colors.transparent,

        'editor.background': colors.editorBackground,
        'editor.foreground': colors.editorForeground,
        'editorLineNumber.foreground': '#75809590',
        'editorCursor.foreground': colors.cursor,
        'editor.selectionBackground': Color(colors.highlight).alpha(0.14).hexa(),
        'editor.wordHighlightBackground': Color(colors.highlight).alpha(0.196).hexa(),
        'editor.findMatchBackground': Color(colors.cursor).alpha(0.565).hexa(),
        'editor.findMatchHighlightBackground': Color(colors.cursor).alpha(0.14).hexa(),
        'editor.lineHighlightBackground': Color(colors.highlight).alpha(0.03).hexa(),
        'editor.lineHighlightBorder': colors.transparent,
        'editorIndentGuide.background': Color(colors.editorForeground).alpha(0.063).hexa(),
        'editorIndentGuide.activeBackground': Color(colors.editorForeground).alpha(0.063).hexa(),
        'editorRuler.foreground': Color(colors.editorForeground).alpha(0.086).hexa(),
        'editorBracketMatch.border': Color(colors.editorForeground).alpha(0.14).hexa(),
        'editorOverviewRuler.border': colors.transparent,
        'editorOverviewRuler.modifiedForeground': '#e2c08d',
        'editorOverviewRuler.addedForeground': colors.warning,
        'editorOverviewRuler.deletedForeground': Color(colors.red).alpha(0.8).hexa(),
        'editorOverviewRuler.errorForeground': colors.error,
        'editorOverviewRuler.warningForeground': colors.warning,
        'editorOverviewRuler.infoForeground': colors.highlight,
        'editorOverviewRuler.bracketMatchForeground': Color(colors.editorForeground).alpha(0.14).hexa(),
        'editorError.foreground': colors.error,
        'editorWarning.foreground': colors.warning,
        'editorGutter.modifiedBackground': '#e2c08d',
        'editorGutter.addedBackground': colors.warning,
        'editorGutter.deletedBackground': Color(colors.red).alpha(0.8).hexa(),

        'editorWidget.background': colors.background,
        'editorWidget.border': '#0c111a',

        'panel.border': colors.background,

        'peekView.border': colors.background,
        'peekViewEditor.background': Color(colors.background).alpha(0.565).hexa(),
        'peekViewEditor.matchHighlightBackground': Color(colors.cursor).alpha(0.565).hexa(),
        'peekViewResult.background': colors.background,
        'peekViewResult.matchHighlightBackground': Color(colors.cursor).alpha(0.14).hexa(),
        'peekViewResult.selectionBackground': Color(colors.highlight).alpha(0.086).hexa(),
        'peekViewTitle.background': colors.background,

        'settings.modifiedItemIndicator': colors.warning,
        'settings.focusedRowBackground': Color(colors.black).alpha(0.063).hexa(),
        'settings.focusedRowBorder': colors.transparent,

        'statusBar.background': colors.pink,
        'statusBar.noFolderBackground': colors.blue,
        'statusBar.debuggingBackground': colors.debug,
        'statusBar.focusBorder': colors.transparent,
        'statusBarItem.remoteBackground': Color(colors.black).alpha(0.067).hexa(),
        'statusBarItem.prominentBackground': Color(colors.black).alpha(0.25).hexa(),

        'titleBar.activeBackground': colors.background,
        'titleBar.inactiveBackground': colors.background,

        'debugToolBar.background': colors.background,

        'gitDecoration.addedResourceForeground': colors.warning,
        'gitDecoration.modifiedResourceForeground': '#e2c08d',
        'gitDecoration.deletedResourceForeground': Color(colors.red).alpha(0.8).hexa(),
        'gitDecoration.ignoredResourceForeground': Color(colors.foreground).alpha(0.5).hexa(),

        'terminal.ansiBlue': colors.blue,
        'terminal.ansiGreen': colors.warning,
        'terminal.ansiRed': colors.red,
        'terminal.ansiYellow': '#e2c08d',

        'editorInlayHint.background': Color(colors.black).alpha(0.063).hexa(),
        'editorInlayHint.foreground': '#75809590',
    },
    'semanticHighlighting': true,
    'tokenColors': [
        {
            'name': 'Identifiers',
            'scope': [
                'entity.name',
                'entity.other.alias',
                'entity.other.inherited-class',
                'keyword.other.type',
                'meta.function.parameter.typehinted storage.type',
                'meta.other.inherited-class',
                'meta.other.type',
                'new entity.name.function',
                'punctuation.separator.inheritance',
                'storage.type.php',
                'support.class',
                'support.other.namespace storage.type',
                'support.other.namespace',
                'support.type'
            ],
            'settings': {
                'foreground': colors.orange
            }
        },
        {
            'name': 'Keywords',
            'scope': [
                'keyword',
                'keyword.operator.new',
                'new',
                'punctuation.definition.block.tag',
                'storage.modifier',
                'storage.type'
            ],
            'settings': {
                'foreground': colors.purple
            }
        },
        {
            'name': 'Variables',
            'scope': [
                'variable',
                'support.variable',
                'entity.name.variable',
                'punctuation.definition.variable',
                'meta.object-literal.key'
            ],
            'settings': {
                'foreground': colors.pink
            }
        },
        {
            'name': 'Constants',
            'scope': [
                'constant',
                'support.constant',
                'punctuation.separator.decimal'
            ],
            'settings': {
                'foreground': colors.yellow
            }
        },
        {
            'name': 'Operators',
            'scope': [
                'keyword.operator'
            ],
            'settings': {
                'foreground': colors.editorForeground
            }
        },
        {
            'name': 'Punctuation',
            'scope': [
                'meta.brace',
                'punctuation'
            ],
            'settings': {
                'foreground': colors.editorForeground
            }
        },
        {
            'name': 'Comments',
            'scope': [
                'comment',
                'punctuation.definition.comment',
                'punctuation.whitespace.comment'
            ],
            'settings': {
                'fontStyle': 'italic',
                'foreground': '#64727d'
            }
        },
        {
            'name': 'Strings',
            'scope': [
                'string',
                'punctuation.definition.string'
            ],
            'settings': {
                'foreground': colors.green
            }
        },
        {
            'name': 'Support Functions, Language Constructs',
            'scope': [
                'support.function',
                'keyword.operator.expression'
            ],
            'settings': {
                'foreground': colors.turquoise
            }
        },
        {
            'name': 'Entity Functions',
            'scope': [
                'entity.name.function'
            ],
            'settings': {
                'foreground': colors.blue
            }
        },
        {
            'name': 'Constructors, Destructors, Magic Functions',
            'scope': [
                'entity.name.function.constructor',
                'entity.name.function.destructor',
                'support.function.magic'
            ],
            'settings': {
                'foreground': colors.turquoise
            }
        },
        {
            'name': 'Tags',
            'scope': [
                'entity.name.tag'
            ],
            'settings': {
                'foreground': colors.pink
            }
        },
        {
            'name': 'Attributes',
            'scope': [
                'entity.other.attribute-name'
            ],
            'settings': {
                'foreground': colors.yellow
            }
        },
        {
            'name': 'Markup Headings',
            'scope': [
                'heading',
                'markup.heading',
                'entity.name.section'
            ],
            'settings': {
                'foreground': colors.pink
            }
        },
        {
            'name': 'Markup Bold',
            'scope': [
                'markup.bold'
            ],
            'settings': {
                'fontStyle': 'bold'
            }
        },
        {
            'name': 'Markup Italic',
            'scope': [
                'markup.italic'
            ],
            'settings': {
                'fontStyle': 'italic'
            }
        },
        {
            'name': 'Markup Underline',
            'scope': [
                'markup.underline'
            ],
            'settings': {
                'fontStyle': 'underline'
            }
        },
        {
            'name': 'Markup Lists',
            'scope': [
                'markup.list beginning.punctuation'
            ],
            'settings': {
                'foreground': colors.yellow
            }
        },
        {
            'name': 'Markup Code',
            'scope': [
                'markup.raw',
                'markup.inline.raw',
                'markup.fenced_code'
            ],
            'settings': {
                'foreground': colors.green
            }
        },
        {
            'name': 'Link URL',
            'scope': [
                'markup.underline.link'
            ],
            'settings': {
                'foreground': colors.turquoise
            }
        },
        {
            'name': 'Link Text',
            'scope': [
                'string.other.link'
            ],
            'settings': {
                'foreground': colors.blue
            }
        },
        {
            'scope': [
                'punctuation.section.embedded'
            ],
            'settings': {
                'foreground': colors.brown
            }
        },
        {
            'scope': [
                'support.constant.property-value'
            ],
            'settings': {
                'foreground': colors.brown
            }
        },
        {
            'name': 'JSON Key',
            'scope': [
                'source.json support.type.property-name'
            ],
            'settings': {
                'foreground': colors.pink
            }
        },
    ]
};
