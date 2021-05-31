// global dependencies
import React from 'react';

// local dependencies
import styles from './RichText.module.scss';

interface RichTextProps {
  detailsData: Record<string, any>;
}

const RichText: React.FC<RichTextProps> = props => {
  const { detailsData } = props;
  const richText = detailsData[0].text;
  // console.table(`this is detailsData before RETURN: ${JSON.stringify(detailsData)}`);

  return (
    <>
      {/* {detailsData.map((item: Record<string, any>, index: string) => {
        switch (item.type) {
                    case 'paragraph': {
            const { text } = item;
            let formattedText = text;
            let extraLength = 0;
            if (typeof item.spans !== 'undefined') {
              for (const element of item.spans) {
                const { start: spanStart } = element;
                const { end: spanEnd } = element;
                const { type: spanType } = element;
                const length = spanStart + extraLength;
                const newSpanStart = spanStart + extraLength;
                const newSpanEnd = spanEnd + extraLength;

                let substringToChange = text.slice(spanStart, spanEnd);
                switch (spanType) {
                  case 'strong': {
                    substringToChange = `<strong>${substringToChange}</strong>`;
                    extraLength += 17;
                    console.log(
                      `STRONG substringToChange.length: ${substringToChange.length}`
                    );
                    console.log(`STRONG extralength: ${extraLength}`);
                    break;
                  }
                  case 'em': {
                    substringToChange = `<em>${substringToChange}</em>`;
                    extraLength += 9;
                    console.log(`EM extralength: ${extraLength}`);
                    break;
                  }
                  case 'hyperlink': {
                    const slashCharPosition = substringToChange.indexOf('/');
                    const textLink = substringToChange.slice(
                      0,
                      slashCharPosition
                    );
                    substringToChange = `<a src={substringToChange}>${textLink}</a>`;
                    extraLength += textLink.length + 14;
                    console.log(`LINK extralength: ${extraLength}`);
                    break;
                  }
                }
                console.log(`extralength: ${extraLength}`);

                formattedText =
                  formattedText.substring(0, newSpanStart) +
                  substringToChange +
                  formattedText.substring(newSpanEnd);
              }
            }
            return (
              <p
                className={styles.paragraph}
                dangerouslySetInnerHTML={{ __html: formattedText }}
              />
            );
          }

          case 'paragraph': {
            const itemText = item.text; // .replaceAll('\n', '<br/>');
            const regexNewLine = /\\n/g; // finds digits\t{anyWordsHere}\n
            const regexOrderedList = /(\d+)\.\\t(.*?)\\n/g; // finds digits\t{anyWordsHere}\n
            const regexUnorderedList = /•\\t(.*?)\\n/g; // finds •\t{anyWordsHere}\n

            const orderedListArray = itemText.match(regexOrderedList);
            const unorderedListArray = itemText.match(regexUnorderedList);
            const formattedText = itemText
              .replace(regexOrderedList, '')
              .replace(regexUnorderedList, '')
              .replace(regexNewLine, '<br/>');

            console.log(`formattedText is: ${formattedText}`);
            console.log(`orderedListArray is: ${orderedListArray}`);
            console.log(`unorderedListArray is: ${unorderedListArray}`);

            return (
              <p
                className={styles.preformatted}
                dangerouslySetInnerHTML={{ __html: formattedText }}
              />
            );
          }

          default:
            console.table(
              `this is detailsData: ${JSON.stringify(detailsData)}`
            );
        }
        return null;
      })} */}

      <p
        className={styles.richText}
        dangerouslySetInnerHTML={{ __html: richText }}
      />
    </>
  );
};

export default RichText;
