import defaultExport, { bar, foo } from './src/foo-bar-baz'

jest.mock('./src/foo-bar-baz', () => {
    const originalModule = jest.requireActual('./src/foo-bar-baz')

    // Mock экспорта по умолчанию и экспорта с именем 'foo'
    return {
        __esModule: true,
        ...originalModule,
        default: jest.fn(() => 'mocked baz'),
        foo: 'mocked foo'
    }
})

test('из импорта возвращаются подмененные значения', () => {
    const defaultExportResult = defaultExport()
    expect(defaultExportResult).toBe('mocked baz')
    expect(defaultExport).toHaveBeenCalled()

    expect(foo).toBe('mocked foo')
    expect(bar()).toBe('bar')
})
