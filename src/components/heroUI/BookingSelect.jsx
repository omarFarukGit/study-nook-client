import { Label, ListBox, Select } from "@heroui/react";

export function BookingSelect() {
  return (
    <div className="flex flex-row gap-4">
      <Select className="w-[256px]" placeholder="Select Time" variant="primary">
        <Label>Strat</Label>
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item id="option1" textValue="Option 1">
              08:00
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="option2" textValue="Option 2">
              09:00
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="option3" textValue="Option 3">
              10:00
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="option4" textValue="Option 4">
              11:00
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="option5" textValue="Option 5">
              12:00
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="option6" textValue="Option 6">
              13:00
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="option7" textValue="Option 7">
              14:00
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="option8" textValue="Option 8">
              15:00
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="option9" textValue="Option 9">
              16:00
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="option10" textValue="Option 10">
              17:00
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
      <Select
        className="w-[256px]"
        placeholder="Select one"
        variant="secondary"
      >
        <Label>End</Label>
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item id="option1" textValue="Option 1">
              08:00
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="option2" textValue="Option 2">
              09:00
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="option3" textValue="Option 3">
              10:00
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="option4" textValue="Option 4">
              11:00
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="option5" textValue="Option 5">
              12:00
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="option6" textValue="Option 6">
              13:00
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="option7" textValue="Option 7">
              14:00
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="option8" textValue="Option 8">
              15:00
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="option9" textValue="Option 9">
              16:00
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="option10" textValue="Option 10">
              17:00
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
}
