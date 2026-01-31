const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    {
      tcId: 'Pos_Fun_0001',
      name: 'Greeting Phrase',
      input: 'Suba raathriyak!',
      expected: 'සුබ රාත්‍රියක්!',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0002',
      name: 'Simple Sentence Request',
      input: 'mama athulata ennadha?',
      expected: 'මම අතුලට එන්නද?',
      category: 'Simple sentence',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0003',
      name: 'Compound Sentence',
      input: 'mama vaeda karanavaa namuth mata mahansiyi.',
      expected: 'මම වැඩ කරනවා නමුත් මට මහන්සියි.',
      category: 'Compound sentence',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0004',
      name: 'Complex Sentence (Conditional)',
      input: 'oyala kannawa nam mamath kannam.',
      expected: 'ඔයල කන්නwඅ නම් මමත් කන්නම්.',
      category: 'Complex sentence',
      grammar: 'Complex sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0005',
      name: 'Interrogative Question',
      input: 'kavudha eyaa?',
      expected: 'කවුද එයා?',
      category: 'Interrogative (question)',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0006',
      name: 'Imperative Command',
      input: 'eka karanna epaa',
      expected: 'එක කරන්න එපා',
      category: 'Imperative (command)',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0007',
      name: 'Past Tense',
      input: 'mama iiye gedhara giyaa.',
      expected: 'මම ඊයෙ ගෙදර ගියා.',
      category: 'Past tense',
      grammar: 'Past tense',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0008',
      name: 'Present Tense',
      input: 'eyaa TV balanavaa.',
      expected: 'එයා TV බලනවා.',
      category: 'Present tense',
      grammar: 'Present tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0009',
      name: 'Future Tense',
      input: 'Mama sadhudhaa gedhara ennam.',
      expected: 'මම සදුදා ගෙදර එන්නම්.',
      category: 'Future tense',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0010',
      name: 'Negation',
      input: 'Mata lakuNu naehae',
      expected: 'මට ලකුණු නැහැ',
      category: 'Negation (negative form)',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0011',
      name: 'Singular Pronoun',
      input: 'mata pothak thiyenavaa.',
      expected: 'මට පොතක් තියෙනවා.',
      category: 'Pronoun variation',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0012',
      name: 'Plural Pronoun',
      input: 'mata poth godak thiyenavaa.',
      expected: 'මට පොත් ගොඩක් තියෙනවා.',
      category: 'Plural form',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0013',
      name: 'Polite Request',
      input: 'puLuvannam mata udhavvak karanna.',
      expected: 'පුළුවන්නම් මට උදව්වක් කරන්න.',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0014',
      name: 'Informal Address',
      input: 'Machan kamudha?',
      expected: 'මචන් කමුද?',
      category: 'Slang / informal language',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0015',
      name: 'Repeated Words',
      input: 'yanna yanna.',
      expected: 'යන්න යන්න.',
      category: 'Word combination / phrase pattern',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0016',
      name: 'Mixed English (Email)',
      input: 'Mata email ekak evanna.',
      expected: 'මට email එකක් එවන්න.',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0017',
      name: 'English Abbreviation (PC)',
      input: 'oyaa PC eka on karanna.',
      expected: 'ඔයා PC එක on කරන්න.',
      category: 'Names / places / common English words',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0018',
      name: 'Currency Format',
      input: 'Rs. 1000 k evanna.',
      expected: 'Rs. 1000 ක් එවන්න.',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0019',
      name: 'Time Format',
      input: '10.30 AM ta hamba vemu.',
      expected: '10.30 AM ට හම්බ වෙමු.',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0020',
      name: 'Date Format',
      input: 'adha 2023/12/31 dha?',
      expected: 'අද 2023/12/31 ද?',
      category: 'Punctuation / numbers',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0021',
      name: 'Double Spaces',
      input: 'mata  kanna  ooni.',
      expected: 'මට  කන්න  ඕනි.',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0022',
      name: 'Line Breaks',
      input: 'Line 1.\nLine 2.',
      expected: 'Line 1.\nLine 2.',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0023',
      name: 'Long Paragraph Input',
      input: 'shrii lQQkaa dheeshayee thaniyee bohoma usas siyaluma thiyenavaa, iith adhara alQQkaarayen piri piritha rata kiyala kiyannavaa',
      expected: 'ශ්‍රී ලංකා දේශයේ තනියේ බොහොම උසස් සියලුම තියෙනවා, ඊත් අදර අලංකාරයෙන් පිරි පිරිත රට කියල කියන්නවා',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'L'
    },
    {
      tcId: 'Pos_Fun_0024',
      name: 'Technical Terms',
      input: 'Online class ekak thiyenavaa.',
      expected: 'Online class එකක් තියෙනවා.',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'M'
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_0001',
      name: 'Joined Words Stress',
      input: 'mamawadakaranawa',
      expected: 'මම වැඩ කරනවා',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_0002',
      name: 'Alphanumeric String',
      input: 'User007',
      expected: 'User007',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0003',
      name: 'Elongated Vowels',
      input: 'Gedaraaaa',
      expected: 'ගෙදරාආආ',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0004',
      name: 'URL Handling',
      input: 'www.google.lk',
      expected: 'www.google.lk',
      category: 'Names / places / common English words',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0005',
      name: 'HTML/Code Syntax',
      input: '<h1>Hello</h1>',
      expected: '<h1>Hello</h1>',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0006',
      name: 'Mixed Capitalization',
      input: 'SiNgLiSh',
      expected: 'SiNgLiSh',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0007',
      name: 'Symbol Injection',
      input: 'B@th',
      expected: 'B@th',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0008',
      name: 'Gibberish Input',
      input: 'qzxy',
      expected: 'qzxy',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0009',
      name: 'Slang Term',
      input: 'Supiri dial ekak.',
      expected: 'සුපිරි ඩයල් එකක්.',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0010',
      name: 'Ambiguous Typo',
      input: 'nana (for naana)',
      expected: 'නෑනා',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_0001',
    name: 'Clear Input Behavior',
    input: 'Type text then clear',
    expected: 'Input field empty',
    category: 'Real-time output update behavior',
    grammar: 'Simple sentence',
    length: 'S'
  }
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
