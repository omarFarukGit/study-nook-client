import { Checkbox, Label } from "@heroui/react";

export function RadioSection() {
  return (
    <div className="flex flex-col gap-4 ">
      <Label>Amenities</Label>
      <div className=" grid grid-cols-3 gap-2">
        <Checkbox defaultSelected id="default-notifications">
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Content>
            <Label htmlFor="default-notifications">Whiteboard</Label>
          </Checkbox.Content>
        </Checkbox>
        <Checkbox defaultSelected id="default-notifications">
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Content>
            <Label htmlFor="default-notifications">Projector</Label>
          </Checkbox.Content>
        </Checkbox>
        <Checkbox defaultSelected id="default-notifications">
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Content>
            <Label htmlFor="default-notifications">Wi-Fi</Label>
          </Checkbox.Content>
        </Checkbox>
        <Checkbox defaultSelected id="default-notifications">
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Content>
            <Label htmlFor="default-notifications">Air Conditioning</Label>
          </Checkbox.Content>
        </Checkbox>
        <Checkbox defaultSelected id="default-notifications">
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Content>
            <Label htmlFor="default-notifications">Quiet Zone</Label>
          </Checkbox.Content>
        </Checkbox>
        <Checkbox defaultSelected id="default-notifications">
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Content>
            <Label htmlFor="default-notifications">Power Outlets</Label>
          </Checkbox.Content>
        </Checkbox>
      </div>
    </div>
  );
}
